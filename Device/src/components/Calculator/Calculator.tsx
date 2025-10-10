import React from 'react';
import { useCalculator } from '../../../hooks/useCalculator';
import { CalculatorDisplay } from './CalculatorDisplay';
import { CalculatorKey } from './CalculatorKey';

export const Calculator: React.FC = () => {
  const calculator = useCalculator();

  const handleDigitClick = (digit: string) => {
    calculator.addDigit(digit);
  };

  const handleOperatorClick = (operator: '+' | '-' | '*' | '/') => {
    calculator.chooseOperator(operator);
  };

  const handleEqualsClick = () => {
    calculator.evaluate();
  };

  const handleClearClick = () => {
    calculator.clear();
  };

  const handleDeleteClick = () => {
    calculator.deleteDigit();
  };

  const handlePercentageClick = () => {
    calculator.percentage();
  };

  const handleNegateClick = () => {
    calculator.negate();
  };

  return (
    <div className="calculator">
      <CalculatorDisplay
        previousOperand={calculator.previousOperand}
        currentOperand={calculator.currentOperand}
        operator={calculator.operator}
      />
      
      <div className="calculator-grid">
        <CalculatorKey variant="secondary" onClick={handleClearClick}>
          {calculator.currentOperand === '0' ? 'AC' : 'C'}
        </CalculatorKey>
        <CalculatorKey variant="secondary" onClick={handleNegateClick}>
          +/-
        </CalculatorKey>
        <CalculatorKey variant="secondary" onClick={handlePercentageClick}>
          %
        </CalculatorKey>
        <CalculatorKey variant="accent" onClick={() => handleOperatorClick('/')}>
          ÷
        </CalculatorKey>

        <CalculatorKey onClick={() => handleDigitClick('7')}>7</CalculatorKey>
        <CalculatorKey onClick={() => handleDigitClick('8')}>8</CalculatorKey>
        <CalculatorKey onClick={() => handleDigitClick('9')}>9</CalculatorKey>
        <CalculatorKey variant="accent" onClick={() => handleOperatorClick('*')}>
          ×
        </CalculatorKey>

        <CalculatorKey onClick={() => handleDigitClick('4')}>4</CalculatorKey>
        <CalculatorKey onClick={() => handleDigitClick('5')}>5</CalculatorKey>
        <CalculatorKey onClick={() => handleDigitClick('6')}>6</CalculatorKey>
        <CalculatorKey variant="accent" onClick={() => handleOperatorClick('-')}>
          -
        </CalculatorKey>

        <CalculatorKey onClick={() => handleDigitClick('1')}>1</CalculatorKey>
        <CalculatorKey onClick={() => handleDigitClick('2')}>2</CalculatorKey>
        <CalculatorKey onClick={() => handleDigitClick('3')}>3</CalculatorKey>
        <CalculatorKey variant="accent" onClick={() => handleOperatorClick('+')}>
          +
        </CalculatorKey>

        <CalculatorKey 
          size="large" 
          onClick={() => handleDigitClick('0')}
          className="col-span-2"
        >
          0
        </CalculatorKey>
        <CalculatorKey onClick={() => handleDigitClick('.')}>.</CalculatorKey>
        <CalculatorKey variant="accent" onClick={handleEqualsClick}>
          =
        </CalculatorKey>
      </div>
    </div>
  );
};