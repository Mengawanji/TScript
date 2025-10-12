import React from 'react';

interface DisplayProps {
  value: string;
  className?: string;
}

export const Display: React.FC<DisplayProps> = ({ value, className = '' }) => {
  const getSizeClass = (val: string): string => {
    if (val === 'Error') return 'error';
    if (val.includes('e')) return 'scientific-notation';
    if (val.length > 12) return 'very-large-number';
    if (val.length > 8) return 'large-number';
    return '';
  };

  const sizeClass = getSizeClass(value);

  return (
    <div className={`calculator-display-primary ${sizeClass} ${className}`}>
      {value}
    </div>
  );
};