import React from 'react';
interface CalculatorKeyProps {
    children: React.ReactNode;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'accent';
    size?: 'small' | 'medium' | 'large';
    className?: string;
}
declare const CalculatorKey: React.FC<CalculatorKeyProps>;
export default CalculatorKey;
