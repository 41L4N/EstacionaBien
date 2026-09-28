import type Stay from '../stay/Stay';

export default class Payment {
	public id?: number;
	public stay_id!: number;
	public stay?: Stay;
	public amount!: number;
	public date!: string;

	constructor(data: Partial<Payment> = {}) {
		Object.assign(this, data);
	}
}
