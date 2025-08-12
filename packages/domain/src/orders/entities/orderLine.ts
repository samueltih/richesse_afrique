export type OrderLineId = number;

export class OrderLine {
    private _id: OrderLineId;
    private _thumbnail?: URL;
    private readonly _description: string;
    private readonly _productReference?: number;
    private _quantity: number = 0;
    private _unitPrice: number = 0;

    get id(): OrderLineId {
        return this._id;
    }

    get thumbnail(): URL | undefined {
        return this._thumbnail;
    }

    get description(): string {
        return this._description;
    }

    get productReference(): number | undefined {
        return this._productReference;
    }

    set unitPrice(value: number) {
        if (value >= 0) {
            this._unitPrice = value;
        } else {
            throw new Error('Unit price cannot be negative')
        }
    }
    get unitPrice(): number {
        return this._unitPrice;
    }
    
    set quantity(value: number) {
        if (value > 0) {
            this._quantity = value;
        } else {
            throw new Error('Quantity should be strictly positive')
        }
    }
    get quantity(): number {
        return this._quantity;
    }

    get price(): number {
        return this._unitPrice * this._quantity;
    }

    constructor(id: OrderLineId, description: string, quantity: number, unitPrice: number, productReference?: number, thumbnail?: URL) {
        this._id = id;
        this._thumbnail = thumbnail;
        this._description = description;
        this._productReference = productReference;
        
        this.quantity = quantity;
        this.unitPrice = unitPrice;
    }

}