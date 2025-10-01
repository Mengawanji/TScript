import { CalculatorState, Operator } from '../types/calculator.js';
export declare const formatOperand: (operand: string | null) => string;
export declare const calculateResult: (previousOperand: string, currentOperand: string, operator: Operator) => string;
export declare const initialState: CalculatorState;
