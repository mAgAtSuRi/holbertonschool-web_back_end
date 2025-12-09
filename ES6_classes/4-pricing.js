import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== "number") {
      throw new TypeError("Amount must be a number");
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError("currency must be an instance of Currency");
    }

    this._amount = amount;
    this._currency = currency;
  }

  // GETTERS
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // SETTERS
  set amount(value) {
    if (typeof value !== "number") {
      throw new TypeError("Amount must be a number");
    }
    this._amount = value;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError("currency must be an instance of Currency");
    }
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

const p = new Pricing(100, new Currency("EUR", "Euro"));
console.log(p);
console.log(p.displayFullPrice());
