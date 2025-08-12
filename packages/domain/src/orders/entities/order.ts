import { OrderLine, OrderLineId } from "./orderLine";

export type OrderId = number;

export type OrderStatus = 'pending' | 'processing' | 'cancelled' | 'completed';

export interface OrderLineUpdate {
    quantity?: number,
    unitPrice?: number
}

export class Order {
  private _id: OrderId;
  private _orderLines: OrderLine[] = [];
  private _status : OrderStatus = 'pending';
  private _discount: number = 0;
  private _tax: number = 0;
  private _createdAt: Date = new Date();

  constructor(
    id: OrderId,
    orderLines: OrderLine[] = [],
    discount: number = 0,
    tax: number = 0
  ) {
    this._id = id;
    this._orderLines = orderLines;
    this._discount = discount;
    this._tax = tax;
  }

  public addOrderLine(description: string, quantity: number, unitPrice: number, productReference?: number): void {
    this._orderLines.push(new OrderLine(1, description, quantity, unitPrice, productReference));
  }

  public updateOrderLine(orderLineId: OrderLineId, orderLineUpdate: OrderLineUpdate) {
    this._orderLines.forEach(orderLine => {
        if (orderLine.id === orderLineId) {
            orderLine.quantity = orderLineUpdate.quantity ?? orderLine.quantity;
            orderLine.unitPrice = orderLineUpdate.quantity ?? orderLine.unitPrice;
        }
    })
  }

  public removeOrderLine(orderLineId: OrderLineId) {
    this._orderLines.filter(orderLine => orderLine.id === orderLineId);
  }

  public totalPrice() {
    return this._orderLines.reduce(
      (previous, current) => previous + current.price,
      0
    );
  }
}
