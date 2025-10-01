export type Operator = '+' | '-' | '*' | '/' | '=' | null;
export type CalculatorFunction = 'clear' | 'delete' | 'percentage' | 'negate';
export interface CalculatorState {
    currentOperand: string;
    previousOperand: string;
    operator: Operator;
    overwrite: boolean;
}
export type CalculatorAction = {
    type: 'ADD_DIGIT';
    payload: string;
} | {
    type: 'CHOOSE_OPERATOR';
    payload: Operator;
} | {
    type: 'CLEAR';
} | {
    type: 'DELETE_DIGIT';
} | {
    type: 'EVALUATE';
} | {
    type: 'PERCENTAGE';
} | {
    type: 'NEGATE';
};
