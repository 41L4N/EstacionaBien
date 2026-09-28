// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxtjs/i18n'],
	css: ['~/assets/css/main.css'],
	i18n: {
		defaultLocale: 'es',
		langDir: 'locales',
		locales: [
			{ code: 'es', language: 'es-ES', file: 'es.json' },
			{ code: 'en', language: 'en-US', file: 'en.json' },
		],
		strategy: 'no_prefix',
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'estacionabien_locale',
			redirectOn: 'root',
			fallbackLocale: 'es',
		},
	},
	app: {
		head: {
			title: 'EstacionaBien',
			titleTemplate: '%s | EstacionaBien',
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,400,0,0',
				},
			],
		},
	},
	runtimeConfig: {
		public: {
			appName: 'EstacionaBien',
			apiBase: '',
		},
	},
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
})
