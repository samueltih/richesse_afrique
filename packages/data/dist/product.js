"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.ProductVariant = void 0;
class ProductVariant {
    get reference() {
        return this._reference;
    }
    constructor(reference) {
        this._reference = reference !== null && reference !== void 0 ? reference : this._generateReference();
    }
    _generateReference() {
        return "---";
    }
}
exports.ProductVariant = ProductVariant;
class Product {
    // -- Getters and setters
    // Name
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    // Description
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    // Slug
    get slug() {
        return this._slug;
    }
    set slug(slug) {
        this._slug = slug;
    }
    // Tags
    get tags() {
        return this._tags;
    }
    set tags(tags) {
        tags.forEach((tag) => this._tags.add(tag));
    }
    constructor(name, description, tags = [], options = [], variants, slug) {
        this._images = [];
        this._attributes = new Map();
        this._variants = [];
        this._name = name;
        this._description = description;
        this._slug = slug !== null && slug !== void 0 ? slug : this._generateSlug(name);
        this._tags = new Set(tags);
        this._options = new Map(options
            .map((option, index) => [
            option.name,
            { values: option.values, priority: option.priority },
        ])
            .sort(this._sortOptions));
        this._variants = variants;
    }
    _generateSlug(name) {
        return "****";
    }
    _sortOptions(a, b) {
        if (a[1].priority != undefined && b[1].priority != undefined) {
            return a[1].priority - b[1].priority;
        }
        return a[0].localeCompare(b[0]);
    }
    addAttribute(name, value) {
        if (!this._options.has(name)) {
            this._attributes.set(name, value);
        }
    }
    removeAttribute(name) {
        this._attributes.delete(name);
    }
    addOption(option) {
        if (!this._attributes.has(option.name) && !this._options.has(option.name)) {
            this._options = new Map([
                ...this._options.entries(),
                [
                    option.name,
                    { values: option.values, priority: option.priority },
                ],
            ].sort(this._sortOptions));
        }
    }
    removeOption(optionName) {
        this._options.delete(optionName);
    }
    addTag(tag) {
        this._tags.add(tag);
    }
    removeTag(tag) {
        this._tags.delete(tag);
    }
}
exports.Product = Product;
