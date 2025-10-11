import type{ CalculatorState, Operator } from '../types/calculator';

export const formatOperand = (operand: string | null): string => {
  if (operand == null) return '';
  const [integer, decimal] = operand.split('.');
  
  if (decimal == null) {
    return new Intl.NumberFormat('en-US').format(Number(integer));
  }
  
  return `${new Intl.NumberFormat('en-US').format(Number(integer))}.${decimal}`;
};

export const calculateResult = (
  previousOperand: string,
  currentOperand: string,
  operator: Operator
): string => {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  
  if (isNaN(prev) || isNaN(current)) return '';
  
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
  
  return computation.toString();
};

export const initialState: CalculatorState = {
  currentOperand: '0',
  previousOperand: '',
  operator: null,
  overwrite: false,
};