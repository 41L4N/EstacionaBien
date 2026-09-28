import type User from '../user/User';
import type Vehicle from '../vehicle/Vehicle';

export default class Stay {
	public id?: number;
	public user_id!: number;
	public vehicle_id!: number;
	public user?: User;
	public vehicle?: Vehicle;
	public start_date!: string;
	public end_date!: string;
	public period!: string;

	constructor(data: Partial<Stay> = {}) {
		Object.assign(this, data);
		this.period = [this.start_date, this.end_date].filter(Boolean).join(' - ');
	}
}
