import type { CalculatorState, Operator } from '../types/calculator';

export const formatOperand = (operand: string | null): string => {
  if (operand == null || operand === '') return '';
  
  // Handle very large/small numbers with scientific notation
  const number = parseFloat(operand);
  
  if (isNaN(number)) return 'Error';
  
  // Use scientific notation for very large or very small numbers
  if (Math.abs(number) > 999999999999999 || (Math.abs(number) < 0.000001 && number !== 0)) {
    return number.toExponential(6);
  }
  
  // Regular formatting for normal numbers
  const [integer, decimal] = operand.split('.');
  
  if (decimal == null) {
    return new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 0
    }).format(Number(integer));
  }
  
  return `${new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0
  }).format(Number(integer))}.${decimal}`;
};

export const calculateResult = (
  previousOperand: string,
  currentOperand: string,
  operator: Operator
): string => {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  
  if (isNaN(prev) || isNaN(current)) return '';
  
  // Handle division by zero
  if (operator === '/' && current === 0) {
    return 'Error';
  }
  
  let computation = 0;
  switch (operator) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '/':
      computation = prev / current;
      break;
    default:
      return '';
  }
  
  // Handle very large results
  if (!isFinite(computation)) {
    return 'Error';
  }
  
  return computation.toString();
};

export const initialState: CalculatorState = {
  currentOperand: '0',
  previousOperand: '',
  operator: null,
  overwrite: false,
};

// Maximum digits to prevent overflow
export const MAX_DIGITS = 15;

export const canAddDigit = (currentOperand: string, digit: string): boolean => {
  // Remove any formatting for digit count check
  const cleanOperand = currentOperand.replace(/[^0-9.]/g, '');
  
  // Count only significant digits (ignore decimal point and leading zeros)
  const significantDigits = cleanOperand.replace(/^0+/, '').replace('.', '');
  
  return significantDigits.length < MAX_DIGITS;
};