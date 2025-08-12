export type BlogPostId = number;
/**
 * Blog Post
 *
 * @author Tih Samuel Mbiyimo'o
 * @since 0.0.1
 */
export declare class BlogPost {
    private _id;
    private _title;
    private _description;
    private _slug;
    private _tags;
    private _content;
    private _likes;
    private _comments;
    private readonly _madeAt;
    private _lastUpdatedAt;
    constructor(id: BlogPostId, title: string, description: string, content: string, slug?: string, tags?: string[], madeAt?: Date, lastUpdatedAt?: Date);
    private generateSlug;
}
