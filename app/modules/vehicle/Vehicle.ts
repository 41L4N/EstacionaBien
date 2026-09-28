export default class Vehicle {
	public id?: number;
	public brand!: string;
	public model!: string;
	public license_plate!: string;

	constructor(data: Partial<Vehicle> = {}) {
		Object.assign(this, data);
	}
}
