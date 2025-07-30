import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hoverEffect = 'lift', // 'lift', 'glow', or 'none'
  padding = 'md',
  shadow = 'md',
  variant = 'default' // 'default' or 'gradient-border'
}) => {
  // --- Base classes for all cards ---
  const baseClasses = 'rounded-xl transition-all duration-300';
  
  // --- Variants for different visual styles ---
  const variants = {
    default: 'bg-white border border-gray-200',
    // NEW: A card with a cool gradient border
    'gradient-border': 'bg-white p-[2px] bg-gradient-to-br from-[#76ABAE] to-[#31363F]'
  };

  // --- Hover effects for more interactivity ---
  const hoverClasses = {
    lift: 'hover:shadow-2xl hover:-translate-y-2',
    glow: 'hover:shadow-2xl hover:shadow-[#76ABAE]/30',
    none: ''
  };
  
  // --- Padding options ---
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    none: ''
  };
  
  // --- Shadow options ---
  const shadowClasses = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
    none: 'shadow-none'
  };
  
  // A special wrapper is needed for the gradient border to work correctly
  if (variant === 'gradient-border') {
    return (
      <div className={`${baseClasses} ${hoverClasses[hoverEffect]} ${shadowClasses[shadow]} ${className}`}>
        <div className={`h-full w-full bg-white rounded-[10px] ${paddingClasses[padding]}`}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={`${baseClasses} ${variants[variant]} ${hoverClasses[hoverEffect]} ${paddingClasses[padding]} ${shadowClasses[shadow]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;