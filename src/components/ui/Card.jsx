import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  padding = 'md',
  shadow = 'md'
}) => {
  const baseClasses = 'bg-[#EEEEEE] rounded-lg border border-[#76ABAE]/20';
  
  const hoverClasses = hover ? 'hover:shadow-lg transition-shadow duration-300' : '';
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    none: ''
  };
  
  const shadowClasses = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    none: ''
  };
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${shadowClasses[shadow]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;