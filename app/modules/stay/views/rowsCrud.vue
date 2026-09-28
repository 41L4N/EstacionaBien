<template>
	<UContainer>
		<UPageHero :title="t('stay.title')" />
		<AppTable
			:rows="mockStays"
			:columns="columns"
		/>
	</UContainer>
</template>

<script setup lang="ts">
import { mockStays } from '../../../mocks/mockData';

const { t } = useI18n();

const columns = [
	{ accessorKey: 'user._full_name', header: t('stay.columns.user') },
	{ accessorKey: 'vehicle.license_plate', header: t('stay.columns.vehicle') },
	{ accessorKey: 'start_date', header: t('stay.columns.startDate') },
	{ accessorKey: 'end_date', header: t('stay.columns.endDate') },
];
</script>
