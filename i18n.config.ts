export default defineI18nConfig(() => ({
	numberFormats: {
		es: {
			currency: {
				style: 'currency',
				currency: 'MXN',
			},
		},
		en: {
			currency: {
				style: 'currency',
				currency: 'MXN',
			},
		},
	},
	datetimeFormats: {
		es: {
			dateTime: {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
			},
		},
		en: {
			dateTime: {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
			},
		},
	},
}));
