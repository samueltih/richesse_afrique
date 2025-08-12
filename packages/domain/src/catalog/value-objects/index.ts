export interface SearchFilter {
  field: string;
  operator: Operator;
  value: any;
}
  
export interface Pagination {
  pageSize: number;
  pageNumber: number;
  orderBy: string;
}

export type StringOperator = "::" | ":=" | "=";
export type NumericOperator = "<" | ">" | ">=" | "<=" | "=";

export type Operator = StringOperator | NumericOperator;


export class Money {
  constructor(private _amount: number, private _currency: string) {
    if (_amount < 0) {
      // new Exception('Amount can not be less than zero (amount >= 0)');
    }
    this._amount = _amount;
    this._currency = _currency;
  }

  get amount(): number {
    return this._amount;
  }

  get currency(): string {
    return this._currency;
  }

  add(money: Money) {
    if (money.currency === this.currency) {
      this._amount += money.amount;
    }
  }
}