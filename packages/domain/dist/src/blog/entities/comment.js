"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const like_1 = require("./like");
/**
 * Comment on a element of the system.
 *
 * @author Tih Samuel Mbiyimo'o
 */
class Comment {
    get id() {
        return this._id;
    }
    get madeBy() {
        return this._madeBy;
    }
    get madeAt() {
        return this._madeAt;
    }
    get lastUpdatedAt() {
        return this._lastUpdatedAt;
    }
    set content(value) {
        this._content = value;
    }
    get content() {
        return this._content;
    }
    get linkedComment() {
        return this._linkedComment;
    }
    constructor(content, madeBy, likes = [], linkedComment, madeAt = new Date(), lastUpdatedAt = new Date()) {
        this._id = 2;
        this._content = content;
        this._madeBy = madeBy;
        this._linkedComment = linkedComment;
        this._likes = likes;
        this._madeAt = madeAt;
        this._lastUpdatedAt = lastUpdatedAt;
    }
    edit(content) {
        this._content = content;
        this._lastUpdatedAt = new Date();
    }
    like(author) {
        if (this._likes.every(like => like.author !== author)) {
            const like = new like_1.Like(author);
            this._likes.push(like);
            return like;
        }
        return null;
    }
    dislike(author) {
        this._likes = this._likes.filter(like => like.author === author);
    }
    isReply() {
        return !!this._linkedComment;
    }
}
exports.Comment = Comment;
