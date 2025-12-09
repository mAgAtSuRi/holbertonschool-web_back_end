export default class Airport {
	constructor(name, code) {
		this._name = name;
		this._code = code;
	}
	toString() {
		return `[object ${this._code}]`
	}
}

const airportSF = new Airport('San Francisco Airport', 'SFO');
console.log(airportSF);
console.log(airportSF.toString());
