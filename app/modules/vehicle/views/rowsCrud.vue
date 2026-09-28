<template>
	<UContainer>
		<UPageHero :title="t('vehicle.title')" />
		<AppTable
			:rows="mockVehicles"
			:columns="columns"
		/>
	</UContainer>
</template>

<script setup lang="ts">
import { mockVehicles } from '../../../mocks/mockData';

const { t } = useI18n();

const columns = [
	{ accessorKey: 'brand', header: t('vehicle.columns.brand') },
	{ accessorKey: 'model', header: t('vehicle.columns.model') },
	{ accessorKey: 'license_plate', header: t('vehicle.columns.licensePlate') },
];
</script>
