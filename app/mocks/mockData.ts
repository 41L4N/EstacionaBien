import Payment from '../modules/payment/Payment';
import Stay from '../modules/stay/Stay';
import User from '../modules/user/User';
import Vehicle from '../modules/vehicle/Vehicle';

export const mockUsers = [
	new User({ id: 1, name: 'Ana', last_name: 'García', email: 'ana@example.com', phone: '+52 55 0000 0001' }),
	new User({ id: 2, name: 'Luis', last_name: 'Martínez', email: 'luis@example.com', phone: '+52 55 0000 0002' }),
	new User({ id: 3, name: 'Sofía', last_name: 'López', email: 'sofia@example.com', phone: '+52 55 0000 0003' }),
	new User({ id: 4, name: 'Carlos', last_name: 'Hernández', email: 'carlos@example.com', phone: '+52 55 0000 0004' }),
	new User({ id: 5, name: 'Valentina', last_name: 'González', email: 'valentina@example.com', phone: '+52 55 0000 0005' }),
];

export const mockVehicles = [
	new Vehicle({ id: 1, brand: 'Nissan', model: 'Versa', license_plate: 'ABC-123' }),
	new Vehicle({ id: 2, brand: 'Toyota', model: 'Corolla', license_plate: 'DEF-456' }),
	new Vehicle({ id: 3, brand: 'Honda', model: 'Civic', license_plate: 'GHI-789' }),
	new Vehicle({ id: 4, brand: 'Volkswagen', model: 'Jetta', license_plate: 'JKL-012' }),
	new Vehicle({ id: 5, brand: 'Mazda', model: 'Mazda 3', license_plate: 'MNO-345' }),
];

export const mockStays = [
	new Stay({ id: 1, user_id: 1, vehicle_id: 1, start_date: '2026-09-20 09:00', end_date: '2026-09-20 11:30' }),
	new Stay({ id: 2, user_id: 2, vehicle_id: 2, start_date: '2026-09-20 10:15', end_date: '2026-09-20 12:00' }),
	new Stay({ id: 3, user_id: 3, vehicle_id: 3, start_date: '2026-09-21 08:30', end_date: '2026-09-21 13:00' }),
	new Stay({ id: 4, user_id: 4, vehicle_id: 4, start_date: '2026-09-21 14:00', end_date: '2026-09-21 16:30' }),
	new Stay({ id: 5, user_id: 5, vehicle_id: 5, start_date: '2026-09-22 09:45', end_date: '2026-09-22 12:15' }),
	new Stay({ id: 6, user_id: 1, vehicle_id: 1, start_date: '2026-09-23 11:00', end_date: '2026-09-23 13:00' }),
];

for (const stay of mockStays) {
	const user = mockUsers.find(({ id }) => id === stay.user_id);
	const vehicle = mockVehicles.find(({ id }) => id === stay.vehicle_id);

	if (!user || !vehicle) {
		throw new Error(`Missing user or vehicle for stay ${stay.id}`);
	}

	stay.user = user;
	stay.vehicle = vehicle;
}

export const mockPayments = [
	new Payment({ id: 1, stay_id: 1, amount: 50, date: '2026-09-20 11:30' }),
	new Payment({ id: 2, stay_id: 2, amount: 35, date: '2026-09-20 12:00' }),
	new Payment({ id: 3, stay_id: 3, amount: 90, date: '2026-09-21 13:00' }),
	new Payment({ id: 4, stay_id: 4, amount: 50, date: '2026-09-21 16:30' }),
	new Payment({ id: 5, stay_id: 5, amount: 50, date: '2026-09-22 12:15' }),
	new Payment({ id: 6, stay_id: 6, amount: 40, date: '2026-09-23 13:00' }),
];
