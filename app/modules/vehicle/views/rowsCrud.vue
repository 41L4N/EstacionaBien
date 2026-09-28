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
	{ accessorKey: 'brand', header: 'Marca' },
	{ accessorKey: 'model', header: 'Modelo' },
	{ accessorKey: 'license_plate', header: 'Placa' },
];
</script>
