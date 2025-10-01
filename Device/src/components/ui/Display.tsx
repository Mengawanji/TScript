import React from 'react';

interface DisplayProps {
  value: string;
  className?: string;
}

export const Display: React.FC<DisplayProps> = ({ value, className = '' }) => {
  return (
    <div className={`calculator-display ${className}`}>
      {value}
    </div>
  );
};