/**
 * Record of an appreciation showed by a user with respect to an element to the system.
 * This mechanism will be used on blog posts to depict user appreciation over the various blog posts.
 *
 * @author Tih Samuel Mbiyimo'o
 * @since 0.0.1
 */
export declare class Like {
    private readonly _author;
    private readonly _createdAt;
    get author(): string;
    get createdAt(): Date;
    constructor(author: string, createdAt?: Date);
}
