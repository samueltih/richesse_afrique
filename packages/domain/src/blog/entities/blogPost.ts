import { Comment } from "./comment";
import { Like } from "./like";

export type BlogPostId = number;

/**
 * Blog Post
 * 
 * @author Tih Samuel Mbiyimo'o
 * @since 0.0.1
 */
export class BlogPost {

    private _id: BlogPostId;

    private _title: string;
    private _description: string;
    private _slug: string;
    private _tags: string[];
    private _content: string;
    
    private _likes: Like[] = [];
    private _comments: Comment[] = [];
    private readonly _madeAt: Date;
    private _lastUpdatedAt: Date;
    
    constructor(id: BlogPostId, title: string, description: string, content: string, slug?: string, tags: string[] = [], madeAt: Date = new Date(), lastUpdatedAt: Date = new Date()) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._slug = slug ?? this.generateSlug(title);
        this._tags = tags;
        this._content = content;
        this._madeAt = madeAt;
        this._lastUpdatedAt = lastUpdatedAt;
    }

    private generateSlug(text?: string) {
        return text ? text.split('\w').join('-') : 'ww';
    }
}