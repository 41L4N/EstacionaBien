export default class Stay {
	public id?: number;
	public user_id!: number;
	public vehicle_id!: number;
	public start_date!: string;
	public end_date!: string;

	constructor(data: Partial<Stay> = {}) {
		Object.assign(this, data);
	}
}
