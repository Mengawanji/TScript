import React from 'react';
interface CalculatorDisplayProps {
    previousOperand: string;
    currentOperand: string;
    operator: string | null;
}
declare const CalculatorDisplay: React.FC<CalculatorDisplayProps>;
export default CalculatorDisplay;
