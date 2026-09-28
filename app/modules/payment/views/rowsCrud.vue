<template>
	<UContainer>
		<UPageHero :title="t('payment.title')" />
		<AppTable
			:rows="mockPayments"
			:columns="columns"
		/>
	</UContainer>
</template>

<script setup lang="ts">
import { mockPayments } from '../../../mocks/mockData';

const { t } = useI18n();

const columns = [
	{ accessorKey: 'stay_id', header: 'Estadía' },
	{ accessorKey: 'amount', header: 'Monto' },
	{ accessorKey: 'date', header: 'Fecha' },
];
</script>
