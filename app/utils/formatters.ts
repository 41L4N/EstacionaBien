export const formatCurrency = (value: number) => new Intl.NumberFormat('es-MX', {
	style: 'currency',
	currency: 'MXN',
	maximumFractionDigits: 0,
}).format(value);

export const formatDateTime = (value: string) => new Intl.DateTimeFormat('es-MX', {
	year: 'numeric',
	month: 'short',
	day: 'numeric',
	hour: '2-digit',
	minute: '2-digit',
}).format(new Date(value.replace(' ', 'T')));
