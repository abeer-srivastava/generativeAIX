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
  // --- Base classes for all buttons ---
  // Added transform and hover:-translate-y-0.5 for a subtle "lift" effect on hover
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5';
  
  // --- Variants with refined styles ---
  const variants = {
    // Primary action button
    primary: 'bg-[#76ABAE] text-white hover:bg-[#66999B] focus:ring-[#76ABAE]',
    
    // Secondary action button
    secondary: 'bg-[#31363F] text-white hover:bg-[#222831] focus:ring-[#31363F]',
    
    // Outlined button, more subtle
    outline: 'border-2 border-[#76ABAE] text-[#76ABAE] bg-transparent hover:bg-[#76ABAE] hover:text-white focus:ring-[#76ABAE]',
    
    // A button with no background or border
    ghost: 'text-[#76ABAE] bg-transparent hover:bg-teal-50 focus:ring-[#76ABAE] shadow-none',

    // NEW: Destructive variant for delete/cancel actions
    destructive: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
  };
  
  // --- Sizing options ---
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  // --- Classes for disabled state ---
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed hover:shadow-md hover:-translate-y-0' : '';
  
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