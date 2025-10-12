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
  const formattedPrevious = formatOperand(previousOperand);
  const formattedCurrent = formatOperand(currentOperand);

  return (
    <div className="calculator-display-container">
      <div className="calculator-display-secondary">
        {formattedPrevious} {operator || ''}
      </div>
      <Display 
        value={formattedCurrent} 
        className="calculator-display-primary"
      />
    </div>
  );
};