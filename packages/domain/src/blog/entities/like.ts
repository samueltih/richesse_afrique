/**
 * Record of an appreciation showed by a user with respect to an element to the system.
 * This mechanism will be used on blog posts to depict user appreciation over the various blog posts.
 * 
 * @author Tih Samuel Mbiyimo'o
 * @since 0.0.1
 */
export class Like {

    private readonly _author: string;
    private readonly _createdAt: Date;

    get author(): string {
        return this._author;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    constructor(author: string, createdAt: Date = new Date()) {
        this._author = author;
        this._createdAt = createdAt; 
    }
}