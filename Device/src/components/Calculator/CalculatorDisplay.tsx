import React from 'react';
import { Display } from '../ui/Display';
import { formatOperand } from '../../utils/calculator';

interface CalculatorDisplayProps {
  previousOperand: string;
  currentOperand: string;
  operator: string | null;
}

export const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({
  previousOperand,
  currentOperand,
  operator,
}) => {
  return (
    <div className="calculator-display-container">
      <Display 
        value={formatOperand(previousOperand) + (operator || '')} 
        className="calculator-display-secondary"
      />
      <Display 
        value={formatOperand(currentOperand)} 
        className="calculator-display-primary"
      />
    </div>
  );
};