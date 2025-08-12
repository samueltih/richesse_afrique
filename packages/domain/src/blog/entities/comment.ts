import { Like } from "./like";

/**
 * Comment on a element of the system.
 * 
 * @author Tih Samuel Mbiyimo'o
 */
export class Comment {

    /**
     * Comment identifier.
     */
    private readonly _id: number;

    /**
     * Content of the comment;
     */
    private _content: string;
    private readonly _madeBy: string;
    private _likes: Like[];
    private readonly _madeAt: Date;
    private _lastUpdatedAt: Date;
    private _linkedComment?: Comment;

    get id(): number {
        return this._id;
    }

    get madeBy(): string {
        return this._madeBy;
    }

    get madeAt(): Date {
        return this._madeAt;
    }

    get lastUpdatedAt(): Date {
        return this._lastUpdatedAt;
    }

    set content(value: string) {
        this._content = value;
    }

    get content(): string {
        return this._content;
    }

    get linkedComment(): Comment | undefined {
        return this._linkedComment;
    }

    constructor(content: string, madeBy: string, likes: Like[] = [], linkedComment?: Comment, madeAt: Date = new Date(), lastUpdatedAt: Date = new Date()) {
        this._id = 2;
        this._content = content;
        this._madeBy = madeBy;
        this._linkedComment = linkedComment;
        this._likes = likes;
        this._madeAt = madeAt;
        this._lastUpdatedAt = lastUpdatedAt;
    }

    public edit(content: string) {
        this._content = content;
        this._lastUpdatedAt = new Date();
    }

    public like(author: string): Like | null {
        if (this._likes.every(like => like.author !== author)) {
            const like = new Like(author);
            this._likes.push(like);
            return like;
        }
        return null;
    }

    public dislike(author: string): void {
        this._likes = this._likes.filter(like => like.author === author);
    }

    public isReply(): boolean {
        return !!this._linkedComment;
    }
}