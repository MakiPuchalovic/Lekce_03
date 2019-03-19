import Animal from './animal'

export default class Dog extends Animal {
	constructor( name, speed, sound ) {
		super( name, speed );
		this.sound = sound;
	}
	bark() {
		console.log(`${this.name} štěká: ${this.sound}`);
	}
}