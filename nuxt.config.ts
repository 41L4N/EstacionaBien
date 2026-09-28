// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/eslint', '@nuxt/ui'],
	css: ['~/assets/css/main.css'],
	app: {
		head: {
			htmlAttrs: {
				lang: 'es',
			},
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
