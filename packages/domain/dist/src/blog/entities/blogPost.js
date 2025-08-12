"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPost = void 0;
/**
 * Blog Post
 *
 * @author Tih Samuel Mbiyimo'o
 * @since 0.0.1
 */
class BlogPost {
    constructor(id, title, description, content, slug, tags = [], madeAt = new Date(), lastUpdatedAt = new Date()) {
        this._likes = [];
        this._comments = [];
        this._id = id;
        this._title = title;
        this._description = description;
        this._slug = slug !== null && slug !== void 0 ? slug : this.generateSlug(title);
        this._tags = tags;
        this._content = content;
        this._madeAt = madeAt;
        this._lastUpdatedAt = lastUpdatedAt;
    }
    generateSlug(text) {
        return text ? text.split('\w').join('-') : 'ww';
    }
}
exports.BlogPost = BlogPost;
