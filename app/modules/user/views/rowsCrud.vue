<template>
	<UContainer>
		<UPageHero
			:title="t('user.title')"
		/>
		<AppTable
			:rows="rows"
			:columns="columns"
		/>
	</UContainer>
</template>

<script setup lang="ts">
import { mockUsers } from '../../../mocks/mockData';

const { t } = useI18n();
const rows = ref(mockUsers);

const columns = [
	{ accessorKey: '_full_name', header: 'Nombre completo' },
	{ accessorKey: 'email', header: 'Correo' },
	{ accessorKey: 'phone', header: 'Teléfono' },
];
</script>
