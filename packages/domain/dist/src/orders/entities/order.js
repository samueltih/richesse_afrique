"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const orderLine_1 = require("./orderLine");
class Order {
    constructor(id, orderLines = [], discount = 0, tax = 0) {
        this._orderLines = [];
        this._status = 'pending';
        this._discount = 0;
        this._tax = 0;
        this._createdAt = new Date();
        this._id = id;
        this._orderLines = orderLines;
        this._discount = discount;
        this._tax = tax;
    }
    addOrderLine(description, quantity, unitPrice, productReference) {
        this._orderLines.push(new orderLine_1.OrderLine(1, description, quantity, unitPrice, productReference));
    }
    updateOrderLine(orderLineId, orderLineUpdate) {
        this._orderLines.forEach(orderLine => {
            var _a, _b;
            if (orderLine.id === orderLineId) {
                orderLine.quantity = (_a = orderLineUpdate.quantity) !== null && _a !== void 0 ? _a : orderLine.quantity;
                orderLine.unitPrice = (_b = orderLineUpdate.quantity) !== null && _b !== void 0 ? _b : orderLine.unitPrice;
            }
        });
    }
    removeOrderLine(orderLineId) {
        this._orderLines.filter(orderLine => orderLine.id === orderLineId);
    }
    totalPrice() {
        return this._orderLines.reduce((previous, current) => previous + current.price, 0);
    }
}
exports.Order = Order;
