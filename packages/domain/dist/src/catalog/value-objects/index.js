"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Money = void 0;
class Money {
    constructor(_amount, _currency) {
        this._amount = _amount;
        this._currency = _currency;
        if (_amount < 0) {
            // new Exception('Amount can not be less than zero (amount >= 0)');
        }
        this._amount = _amount;
        this._currency = _currency;
    }
    get amount() {
        return this._amount;
    }
    get currency() {
        return this._currency;
    }
    add(money) {
        if (money.currency === this.currency) {
            this._amount += money.amount;
        }
    }
}
exports.Money = Money;
