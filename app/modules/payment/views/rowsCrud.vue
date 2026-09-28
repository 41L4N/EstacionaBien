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
	{ accessorKey: 'stay_id', header: t('payment.columns.stay') },
	{ accessorKey: 'amount', header: t('payment.columns.amount') },
	{ accessorKey: 'date', header: t('payment.columns.date') },
];
</script>
