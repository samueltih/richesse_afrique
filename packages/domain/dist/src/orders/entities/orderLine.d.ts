export type OrderLineId = number;
export declare class OrderLine {
    private _id;
    private _thumbnail?;
    private readonly _description;
    private readonly _productReference?;
    private _quantity;
    private _unitPrice;
    get id(): OrderLineId;
    get thumbnail(): URL | undefined;
    get description(): string;
    get productReference(): number | undefined;
    set unitPrice(value: number);
    get unitPrice(): number;
    set quantity(value: number);
    get quantity(): number;
    get price(): number;
    constructor(id: OrderLineId, description: string, quantity: number, unitPrice: number, productReference?: number, thumbnail?: URL);
}
