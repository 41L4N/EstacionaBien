<template>
	<div>
		<UTable
			:data="paginatedRows"
			:columns="props.columns"
			:empty="t('table.empty')"
		/>
		<UPagination
			v-if="props.rows.length > pageSize"
			v-model:page="page"
			:items-per-page="pageSize"
			:total="props.rows.length"
		/>
	</div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { TableColumn } from '@nuxt/ui';

const props = withDefaults(defineProps<{
	rows?: object[];
	columns?: TableColumn<object>[];
}>(), {
	rows: () => [],
	columns: () => [],
});

const { t } = useI18n();
const pageSize = 10;
const page = ref(1);
const paginatedRows = computed(() => {
	const start = (page.value - 1) * pageSize;
	return props.rows.slice(start, start + pageSize);
});

watch(() => props.rows.length, () => {
	page.value = 1;
});
</script>
