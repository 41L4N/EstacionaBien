<template>
	<UPage>
		<UContainer>
			<UPageHeader
				:title="t('dashboard.title')"
				:description="t('dashboard.subtitle')"
				:ui="{ root: 'border-b-0' }"
			>
				<USelect
					v-model="selectedPeriod"
					:items="periodOptions"
					value-key="value"
					:aria-label="t('dashboard.period')"
				/>
			</UPageHeader>

			<UPageGrid>
				<UPageCard
					:title="t('dashboard.totalRevenue')"
					:description="t('dashboard.paymentsRecorded', { count: filteredPayments.length })"
					icon="i-lucide-banknote"
					variant="subtle"
				>
					<UBadge
						color="primary"
						variant="subtle"
						size="lg"
					>
						{{ formatCurrency(totalRevenue) }}
					</UBadge>
				</UPageCard>

				<UPageCard
					:title="t('dashboard.totalStays')"
					:description="t('dashboard.staysRecorded')"
					icon="i-lucide-car-front"
					variant="subtle"
				>
					<UBadge
						color="info"
						variant="subtle"
						size="lg"
					>
						{{ filteredStays.length.toLocaleString(locale) }}
					</UBadge>
				</UPageCard>

				<UPageCard
					:title="t('dashboard.averageTicket')"
					:description="t('dashboard.paymentsRecorded', { count: filteredPayments.length })"
					icon="i-lucide-receipt"
					variant="subtle"
				>
					<UBadge
						color="success"
						variant="subtle"
						size="lg"
					>
						{{ formatCurrency(averagePayment) }}
					</UBadge>
				</UPageCard>
				<UPageCard
					:title="t('dashboard.revenue')"
					:description="t('dashboard.revenueDescription', { total: formatCurrency(totalRevenue) })"
					icon="i-lucide-chart-no-axes-column-increasing"
					variant="outline"
				>
					<UProgressGroup
						v-if="revenueByDay.length"
						:items="revenueByDay"
						:max="totalRevenue || 1"
						size="lg"
					>
						<template #item-trailing="{ item, percent }">
							{{ formatCurrency(item.value ?? 0) }} · {{ Math.round(percent) }}%
						</template>
					</UProgressGroup>
					<UEmpty
						v-else
						icon="i-lucide-chart-no-axes-column-increasing"
						:title="t('dashboard.noRevenue')"
					/>
				</UPageCard>

				<UPageCard
					:title="t('dashboard.vehicleActivity')"
					:description="t('dashboard.vehicleActivityDescription')"
					icon="i-lucide-car"
					variant="outline"
				>
					<UProgressGroup
						v-if="vehicleActivity.length && filteredStays.length"
						:items="vehicleActivity"
						:max="filteredStays.length"
						color="primary"
						size="lg"
					>
						<template #item-trailing="{ item }">
							{{ item.value }} {{ t('dashboard.staysCount') }}
						</template>
					</UProgressGroup>
					<UEmpty
						v-else
						icon="i-lucide-car"
						:title="t('dashboard.noVehicleActivity')"
					/>
				</UPageCard>

				<UPageCard
					:title="t('dashboard.frequentCustomers')"
					:description="t('dashboard.frequentCustomersDescription', { count: customerActivity.length })"
					icon="i-lucide-users-round"
					variant="outline"
				>
					<UProgressGroup
						v-if="customerActivity.length && filteredStays.length"
						:items="customerActivity"
						:max="filteredStays.length"
						color="success"
						size="lg"
					>
						<template #item-trailing="{ item }">
							{{ item.value }} {{ t('dashboard.staysCount') }}
						</template>
					</UProgressGroup>
					<UEmpty
						v-else
						icon="i-lucide-users-round"
						:title="t('dashboard.noCustomerActivity')"
					/>
				</UPageCard>
			</UPageGrid>
		</UContainer>
	</UPage>
</template>

<script setup lang="ts">
import { mockPayments, mockStays, mockUsers, mockVehicles } from '../../../mocks/mockData';
import { formatCurrency } from '../../../utils/formatters';

const { t, locale } = useI18n();
const selectedPeriod = ref<'3' | 'all'>('all');

const periodOptions = computed(() => [
	{ label: t('dashboard.allRecords'), value: 'all' },
	{ label: t('dashboard.lastThreeDays'), value: '3' },
]);

const latestActivityDate = [...mockPayments]
	.sort((first, second) => second.date.localeCompare(first.date))[0]?.date.slice(0, 10);

const isWithinPeriod = (date: string) => {
	if (selectedPeriod.value === 'all' || !latestActivityDate) {
		return true;
	}

	const daysBeforeLatest = (Date.parse(`${latestActivityDate}T00:00:00`) - Date.parse(`${date.slice(0, 10)}T00:00:00`)) / 86_400_000;
	return daysBeforeLatest >= 0 && daysBeforeLatest < Number(selectedPeriod.value);
};

const filteredPayments = computed(() => mockPayments.filter(payment => isWithinPeriod(payment.date)));
const filteredStays = computed(() => mockStays.filter(stay => isWithinPeriod(stay.start_date)));
const totalRevenue = computed(() => filteredPayments.value.reduce((total, payment) => total + payment.amount, 0));
const averagePayment = computed(() => filteredPayments.value.length ? totalRevenue.value / filteredPayments.value.length : 0);

const revenueByDay = computed(() => {
	const totals = new Map<string, number>();

	for (const payment of filteredPayments.value) {
		const date = payment.date.slice(0, 10);
		totals.set(date, (totals.get(date) ?? 0) + payment.amount);
	}

	return [...totals.entries()]
		.sort(([first], [second]) => first.localeCompare(second))
		.map(([date, amount]) => ({
			label: new Intl.DateTimeFormat(locale.value, { weekday: 'short', day: 'numeric' }).format(new Date(`${date}T12:00:00`)),
			value: amount,
		}));
});

const vehicleActivity = computed(() => {
	const staysByVehicle = new Map<number, number>();

	for (const stay of filteredStays.value) {
		staysByVehicle.set(stay.vehicle_id, (staysByVehicle.get(stay.vehicle_id) ?? 0) + 1);
	}

	return mockVehicles
		.map(vehicle => ({
			label: `${vehicle.brand} ${vehicle.model} · ${vehicle.license_plate}`,
			value: staysByVehicle.get(vehicle.id ?? 0) ?? 0,
		}))
		.filter(vehicle => vehicle.value > 0)
		.sort((first, second) => second.value - first.value);
});

const customerActivity = computed(() => {
	const staysByCustomer = new Map<number, number>();

	for (const stay of filteredStays.value) {
		staysByCustomer.set(stay.user_id, (staysByCustomer.get(stay.user_id) ?? 0) + 1);
	}

	return mockUsers
		.map(user => ({
			label: user._full_name,
			value: staysByCustomer.get(user.id ?? 0) ?? 0,
		}))
		.filter(customer => customer.value > 0)
		.sort((first, second) => second.value - first.value);
});

</script>
