export default class Payment {
	public id?: number;
	public amount!: number;
	public date!: string;

	constructor(data: Partial<Payment> = {}) {
		Object.assign(this, data);
	}
}
