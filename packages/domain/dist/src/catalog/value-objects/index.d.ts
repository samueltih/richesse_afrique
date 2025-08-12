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
export declare class Money {
    private _amount;
    private _currency;
    constructor(_amount: number, _currency: string);
    get amount(): number;
    get currency(): string;
    add(money: Money): void;
}
