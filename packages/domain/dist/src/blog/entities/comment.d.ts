import { Like } from "./like";
/**
 * Comment on a element of the system.
 *
 * @author Tih Samuel Mbiyimo'o
 */
export declare class Comment {
    /**
     * Comment identifier.
     */
    private readonly _id;
    /**
     * Content of the comment;
     */
    private _content;
    private readonly _madeBy;
    private _likes;
    private readonly _madeAt;
    private _lastUpdatedAt;
    private _linkedComment?;
    get id(): number;
    get madeBy(): string;
    get madeAt(): Date;
    get lastUpdatedAt(): Date;
    set content(value: string);
    get content(): string;
    get linkedComment(): Comment | undefined;
    constructor(content: string, madeBy: string, likes?: Like[], linkedComment?: Comment, madeAt?: Date, lastUpdatedAt?: Date);
    edit(content: string): void;
    like(author: string): Like | null;
    dislike(author: string): void;
    isReply(): boolean;
}
