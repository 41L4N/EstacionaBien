import type User from '../user/User';
import type Vehicle from '../vehicle/Vehicle';
import { formatDateTime } from '../../utils/formatters';

export default class Stay {
	public id?: number;
	public user_id!: number;
	public vehicle_id!: number;
	public user?: User;
	public vehicle?: Vehicle;
	public start_date!: string;
	public end_date!: string;
	public period!: string;
	public _start_date!: string;
	public _end_date!: string;

	constructor(data: Partial<Stay> = {}) {
		Object.assign(this, data);
		this._start_date = formatDateTime(this.start_date);
		this._end_date = formatDateTime(this.end_date);
		this.period = [this._start_date, this._end_date].filter(Boolean).join(' - ');
	}
}
