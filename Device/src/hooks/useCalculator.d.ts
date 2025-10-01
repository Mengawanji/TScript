import { Operator } from '../types/calculator';
export default function useCalculator(): {
    addDigit: (digit: string) => void;
    chooseOperator: (operator: Operator) => void;
    clear: () => void;
    deleteDigit: () => void;
    evaluate: () => void;
    percentage: () => void;
    negate: () => void;
    currentOperand: string;
    previousOperand: string;
    operator: Operator;
    overwrite: boolean;
};
