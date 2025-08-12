"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLine = void 0;
class OrderLine {
    get id() {
        return this._id;
    }
    get thumbnail() {
        return this._thumbnail;
    }
    get description() {
        return this._description;
    }
    get productReference() {
        return this._productReference;
    }
    set unitPrice(value) {
        if (value >= 0) {
            this._unitPrice = value;
        }
        else {
            throw new Error('Unit price cannot be negative');
        }
    }
    get unitPrice() {
        return this._unitPrice;
    }
    set quantity(value) {
        if (value > 0) {
            this._quantity = value;
        }
        else {
            throw new Error('Quantity should be strictly positive');
        }
    }
    get quantity() {
        return this._quantity;
    }
    get price() {
        return this._unitPrice * this._quantity;
    }
    constructor(id, description, quantity, unitPrice, productReference, thumbnail) {
        this._quantity = 0;
        this._unitPrice = 0;
        this._id = id;
        this._thumbnail = thumbnail;
        this._description = description;
        this._productReference = productReference;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
    }
}
exports.OrderLine = OrderLine;
