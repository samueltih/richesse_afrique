"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServiceImpl = void 0;
class ProductServiceImpl {
    constructor(_productRepository) {
        this._productRepository = _productRepository;
    }
    searchProducts(filters_1, pagination_1) {
        return __awaiter(this, arguments, void 0, function* (filters, pagination, withOptions = false, withVariants = false) {
            return yield this._productRepository.search(filters, pagination, withOptions, withVariants);
        });
    }
    getProduct(productId_1) {
        return __awaiter(this, arguments, void 0, function* (productId, withOptions = true, withVariants = true) {
            console.log("Fetching product in database");
            return yield this._productRepository.findById(productId, withOptions, withVariants);
        });
    }
    createProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._productRepository.save(product);
        });
    }
    updateProduct(productId, product) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this._productRepository.existsById(productId)) {
                this._productRepository.save(product);
            }
        });
    }
    deleteProduct(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._productRepository.deleteById(productId);
        });
    }
    countProducts() {
        return __awaiter(this, arguments, void 0, function* (searchFilters = []) {
            return yield this._productRepository.count(searchFilters);
        });
    }
}
exports.ProductServiceImpl = ProductServiceImpl;
