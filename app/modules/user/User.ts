export default class User {
	public id?: number;
	public name!: string;
	public last_name!: string;
	public email!: string;
	public phone?: string;
	public _full_name!: string;

	constructor(data: Partial<User> = {}) {
		Object.assign(this, data);
		this._full_name = [data.name, data.last_name].filter(Boolean).join(' ');
	}
}
