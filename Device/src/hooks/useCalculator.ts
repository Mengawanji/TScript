import { useReducer } from 'react';
import type { CalculatorState, CalculatorAction, Operator } from '../types/calculator';
import { calculateResult, initialState, MAX_DIGITS, canAddDigit } from '../utils/calculator';

function calculatorReducer(state: CalculatorState, action: CalculatorAction): CalculatorState {
  switch (action.type) {
    case 'ADD_DIGIT':
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: action.payload,
          overwrite: false,
        };
      }

      // Prevent adding more digits than display can handle
      if (!canAddDigit(state.currentOperand, action.payload)) {
        return state;
      }

      if (action.payload === '0' && state.currentOperand === '0') {
        return state;
      }

      if (action.payload === '.' && state.currentOperand.includes('.')) {
        return state;
      }

      if (state.currentOperand === '0' && action.payload !== '.') {
        return {
          ...state,
          currentOperand: action.payload,
        };
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand}${action.payload}`,
      };

    case 'CHOOSE_OPERATOR':
      if (state.currentOperand === '' && state.previousOperand === '') {
        return state;
      }

      if (state.currentOperand === 'Error') {
        return initialState;
      }

      if (state.previousOperand === '') {
        return {
          ...state,
          operator: action.payload,
          previousOperand: state.currentOperand,
          currentOperand: '',
        };
      }

      if (state.currentOperand === '') {
        return {
          ...state,
          operator: action.payload,
        };
      }

      const result = calculateResult(
        state.previousOperand,
        state.currentOperand,
        state.operator
      );

      return {
        ...state,
        previousOperand: result,
        operator: action.payload,
        currentOperand: '',
      };

    case 'CLEAR':
      return initialState;

    case 'DELETE_DIGIT':
      if (state.overwrite || state.currentOperand === 'Error') {
        return {
          ...initialState,
        };
      }

      if (state.currentOperand.length === 1) {
        return {
          ...state,
          currentOperand: '0',
        };
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };

    case 'EVALUATE':
      if (state.operator == null || state.currentOperand === '' || state.previousOperand === '') {
        return state;
      }

      const evaluationResult = calculateResult(
        state.previousOperand,
        state.currentOperand,
        state.operator
      );

      return {
        ...state,
        overwrite: true,
        previousOperand: '',
        operator: null,
        currentOperand: evaluationResult,
      };

    case 'PERCENTAGE':
      if (state.currentOperand === '' || state.currentOperand === 'Error') return state;
      
      const percentageResult = (parseFloat(state.currentOperand) / 100).toString();
      
      return {
        ...state,
        currentOperand: canAddDigit(percentageResult, '') ? percentageResult : 'Error',
      };

    case 'NEGATE':
      if (state.currentOperand === '' || state.currentOperand === 'Error') return state;
      
      return {
        ...state,
        currentOperand: (parseFloat(state.currentOperand) * -1).toString(),
      };

    default:
      return state;
  }
}

export function useCalculator() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  return {
    ...state,
    addDigit: (digit: string) => dispatch({ type: 'ADD_DIGIT', payload: digit }),
    chooseOperator: (operator: Operator) => dispatch({ type: 'CHOOSE_OPERATOR', payload: operator }),
    clear: () => dispatch({ type: 'CLEAR' }),
    deleteDigit: () => dispatch({ type: 'DELETE_DIGIT' }),
    evaluate: () => dispatch({ type: 'EVALUATE' }),
    percentage: () => dispatch({ type: 'PERCENTAGE' }),
    negate: () => dispatch({ type: 'NEGATE' }),
  };
}