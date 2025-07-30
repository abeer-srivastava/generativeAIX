import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  footer, // NEW: Prop to pass footer buttons
  size = 'md',
  showCloseButton = true 
}) => {
  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  };

  // This effect to prevent body scroll is already perfect.
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // We don't render anything if the modal is not open.
  if (!isOpen) return null;

  return (
    // The main container, which is fixed to the viewport
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose} // Allow closing by clicking the backdrop
    >
      {/* Backdrop with "glassmorphism" effect */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Modal Panel */}
      <div 
        // Prevent click events on the modal from bubbling up to the backdrop and closing it
        onClick={(e) => e.stopPropagation()} 
        className={`relative w-full ${sizes[size]} my-8 overflow-hidden text-left bg-white shadow-xl rounded-xl transition-all duration-300 transform
          ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-10 scale-95'}`}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-gray-200">
          {title && <h3 className="text-xl font-semibold text-gray-800">{title}</h3>}
          {showCloseButton && (
            <button
              onClick={onClose}
              className="p-1 text-gray-400 rounded-full hover:bg-gray-100 hover:text-gray-700 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          )}
        </div>
        
        {/* Content */}
        <div className="p-6 text-gray-600">
          {children}
        </div>

        {/* NEW: Footer for action buttons */}
        {footer && (
          <div className="flex items-center justify-end p-4 bg-gray-50 border-t border-gray-200 space-x-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;