export default class Person {
	constructor( name, surname ) {
		this._name = name;
		this._surname = surname;
	}
	get fullName() {
		return `${this._name} ${this._surname}`;
	}
	set fullName( newName) {
		let names = newName.split(' ');
		this._name = names[0];
		this._surname = names[1];
	}
	greet() {
		console.log(`Čau, jmenuji se ${this._name} ${this._surname}.`);
	}
}