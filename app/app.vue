<template>
	<UApp>
		<UHeader
			:title="t('home.title')"
		>
			<template #left>
				<NuxtLink
					:to="{ name: 'dashboard' }"
					:aria-label="t('home.title')"
				>
					{{ t('home.title') }}
				</NuxtLink>
			</template>
			<nav>
				<UButton
					v-for="item in menuItems"
					:key="item.name"
					color="neutral"
					variant="ghost"
					:to="item.to"
				>
					{{ item.label }}
				</UButton>
			</nav>
			<template #body>
				<UNavigationMenu
					:items="menuItems"
					orientation="vertical"
				/>
			</template>
			<template #right>
				<USelect
					:model-value="locale"
					:items="localeOptions"
					value-key="value"
					:aria-label="t('common.selectLanguage')"
					@update:model-value="setLocale"
				/>
			</template>
		</UHeader>
		<NuxtPage />
	</UApp>
</template>

<script setup lang="ts">
const { t, locale, setLocale } = useI18n();
const localeOptions = computed(() => [
	{ label: t('common.languages.es'), value: 'es' as const },
	{ label: t('common.languages.en'), value: 'en' as const },
]);
const menuItems = computed(() => [
	{ name: 'dashboard', label: t('dashboard.title'), to: { name: 'dashboard' } },
	{ name: 'user', label: t('user.title'), to: { name: 'user' } },
	{ name: 'vehicle', label: t('vehicle.title'), to: { name: 'vehicle' } },
	{ name: 'stays', label: t('stay.title'), to: { name: 'stays' } },
	{ name: 'payments', label: t('payment.title'), to: { name: 'payments' } },
]);
</script>
