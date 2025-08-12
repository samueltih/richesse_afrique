"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
class Category {
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get products() {
        return this._products;
    }
    constructor(name, description, products = []) {
        this._products = [];
        this._name = name;
        this._description = description;
        this._products = products;
    }
    addProduct(product) {
        this._products.push(product);
    }
    removeProduct(productId) {
        this._products.filter((product) => product.id === productId);
    }
}
exports.Category = Category;
