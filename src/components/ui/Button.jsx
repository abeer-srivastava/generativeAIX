
import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  disabled = false,
  type = 'button'
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-[#76ABAE] text-[#EEEEEE] hover:bg-[#31363F] focus:ring-[#76ABAE]',
    secondary: 'bg-[#31363F] text-[#EEEEEE] hover:bg-[#222831] focus:ring-[#31363F]',
    outline: 'border-2 border-[#76ABAE] text-[#76ABAE] hover:bg-[#76ABAE] hover:text-[#EEEEEE] focus:ring-[#76ABAE]',
    ghost: 'text-[#76ABAE] hover:bg-[#EEEEEE] focus:ring-[#76ABAE]'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;