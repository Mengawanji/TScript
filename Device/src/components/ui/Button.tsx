import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'small' | 'medium' | 'large';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  ...props
}) => {
  const baseClasses = 'calculator-btn focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors';
  const variantClasses = {
    primary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    secondary: 'bg-gray-300 hover:bg-gray-400 text-gray-800',
    accent: 'bg-orange-500 hover:bg-orange-600 text-white',
  };
  const sizeClasses = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-4',
    large: 'py-3 px-6 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};