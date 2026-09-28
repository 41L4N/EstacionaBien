<template>
	<UApp>
		<UContainer>
			<UCard>
				<template #header>
					{{ t('home.welcome') }}
				</template>
				<USelect
					:model-value="locale"
					:items="localeOptions"
					value-key="value"
					aria-label="Seleccionar idioma"
					@update:model-value="setLocale"
				/>
			</UCard>
		</UContainer>
	</UApp>
</template>

<script setup lang="ts">
const { t, locale, setLocale } = useI18n();
const localeOptions = [
	{ label: 'Español', value: 'es' as const },
	{ label: 'English', value: 'en' as const },
];
</script>