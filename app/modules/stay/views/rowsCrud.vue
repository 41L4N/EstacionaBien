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
	{ accessorKey: 'user_id', header: 'Usuario' },
	{ accessorKey: 'vehicle_id', header: 'Vehículo' },
	{ accessorKey: 'start_date', header: 'Inicio' },
	{ accessorKey: 'end_date', header: 'Fin' },
];
</script>
