"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    // -- Getters and setters
    // Identifiant
    get id() {
        return this._id;
    }
    // Attributes
    get attributes() {
        return this._attributes;
    }
    // Compare at Price
    get compareAtPrice() {
        return this._compareAtPrice;
    }
    set compareAtPrice(value) {
        this._compareAtPrice = value;
    }
    // Description
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    // Images
    get images() {
        return this._images;
    }
    // Name
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    // Options
    get options() {
        const result = [];
        this._options.forEach((value, key) => result.push({ name: key, values: value.values, priority: value.priority }));
        return result;
    }
    // Price
    get price() {
        return this._price;
    }
    set price(value) {
        if (value >= 0)
            this._price = value;
    }
    // Status
    get status() {
        return this._status;
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
    // Variants
    get variants() {
        return this._variants;
    }
    // Product reference
    get reference() {
        return this._reference;
    }
    constructor(name, description, price = 0, tags = [], options = [], variants = [], compareAtPrice, images = [], slug, id, reference) {
        this._attributes = new Map();
        this._images = [];
        this._price = 0;
        this._status = 'draft';
        this._variants = [];
        this._id = id;
        this._compareAtPrice = compareAtPrice;
        this._description = description;
        this._images = images;
        this._name = name;
        this._price = price;
        this._slug = slug !== null && slug !== void 0 ? slug : this._generateSlug(name);
        this._tags = new Set(tags);
        this._reference = reference !== null && reference !== void 0 ? reference : this._generateReference();
        this._options = new Map(options
            .map((option, index) => [
            option.name,
            { values: option.values, priority: option.priority },
        ])
            .sort(this._sortOptions));
        this._variants = variants.length > 0 ? variants : [{
                reference: "ffdfdfd",
                preview: { url: '', cover: true }
            }];
    }
    _generateSlug(name) {
        return "****";
    }
    _generateReference() {
        return "REf-0";
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
    addOption(name, values, priority) {
        if (!this._attributes.has(name) && !this._options.has(name)) {
            this._options = new Map([
                ...this._options.entries(),
                [
                    name,
                    { values, priority },
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
    archive() {
        this._status = 'archived';
    }
    publish() {
        this._status = 'active';
    }
    draft() {
        this._status = 'draft';
    }
}
exports.Product = Product;
