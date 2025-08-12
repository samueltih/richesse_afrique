"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductFactory = void 0;
const entities_1 = require("../entities");
class ProductFactory {
    static create(productId, name, description, price, compareAtPrice, slug, tags = [], images = [], options = [], variants = []) {
        let product = new entities_1.Product(name, description, price, tags, [], [], compareAtPrice, [], slug, productId !== null && productId !== void 0 ? productId : undefined);
        // Handling images
        // images.forEach(image => product.);
        // // Handling options
        // options.forEach(option => product.addOption()) 
        // // Handling variants
        // variants.forEach(option => product.addVariant()) 
        return product;
    }
}
exports.ProductFactory = ProductFactory;
