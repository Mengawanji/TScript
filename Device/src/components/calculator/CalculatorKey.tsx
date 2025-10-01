import React from 'react';
import { Button } from '../ui/Button';

interface CalculatorKeyProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

  const CalculatorKey: React.FC<CalculatorKeyProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  className = '',
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      className={`calculator-key ${className}`}
    >
      {children}
    </Button>
  );
};

export default CalculatorKey;