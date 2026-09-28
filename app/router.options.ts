import type { RouterConfig } from '@nuxt/schema';

export default {
	routes: () => [
		{
			name: 'dashboard',
			path: '/',
			component: () => import('./modules/dashboard/views/Dashboard.vue'),
		},
		{
			name: 'user',
			path: '/users',
			component: () => import('./modules/user/views/User.vue'),
		},
		{
			name: 'vehicle',
			path: '/vehicles',
			component: () => import('./modules/vehicle/views/Vehicle.vue'),
		},
		{
			name: 'stays',
			path: '/stays',
			component: () => import('./modules/stay/views/Stay.vue'),
		},
		{
			name: 'payments',
			path: '/payments',
			component: () => import('./modules/payment/views/Payment.vue'),
		},
	],
} satisfies RouterConfig;
