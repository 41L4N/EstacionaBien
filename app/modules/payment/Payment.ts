import type Stay from '../stay/Stay';
import { formatCurrency, formatDateTime } from '../../utils/formatters';

export default class Payment {
	public id?: number;
	public stay_id!: number;
	public stay?: Stay;
	public amount!: number;
	public date!: string;
	public _amount!: string;
	public _date!: string;

	constructor(data: Partial<Payment> = {}) {
		Object.assign(this, data);
		this._amount = formatCurrency(this.amount);
		this._date = formatDateTime(this.date);
	}
}
