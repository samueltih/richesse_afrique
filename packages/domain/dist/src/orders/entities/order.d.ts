import { OrderLine, OrderLineId } from "./orderLine";
export type OrderId = number;
export type OrderStatus = 'pending' | 'processing' | 'cancelled' | 'completed';
export interface OrderLineUpdate {
    quantity?: number;
    unitPrice?: number;
}
export declare class Order {
    private _id;
    private _orderLines;
    private _status;
    private _discount;
    private _tax;
    private _createdAt;
    constructor(id: OrderId, orderLines?: OrderLine[], discount?: number, tax?: number);
    addOrderLine(description: string, quantity: number, unitPrice: number, productReference?: number): void;
    updateOrderLine(orderLineId: OrderLineId, orderLineUpdate: OrderLineUpdate): void;
    removeOrderLine(orderLineId: OrderLineId): void;
    totalPrice(): number;
}
