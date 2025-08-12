"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
/**
 * Record of an appreciation showed by a user with respect to an element to the system.
 * This mechanism will be used on blog posts to depict user appreciation over the various blog posts.
 *
 * @author Tih Samuel Mbiyimo'o
 * @since 0.0.1
 */
class Like {
    get author() {
        return this._author;
    }
    get createdAt() {
        return this._createdAt;
    }
    constructor(author, createdAt = new Date()) {
        this._author = author;
        this._createdAt = createdAt;
    }
}
exports.Like = Like;
