import React from 'react';

/**
 * Reusable icon container component
 * Addresses improvement #27 - shared icon component
 */
const IconBox = ({
    icon,
    size = 'md',
    variant = 'primary',
    className = ''
}) => {
    const sizeClasses = {
        sm: 'w-10 h-10',
        md: 'w-12 h-12',
        lg: 'w-16 h-16',
    };

    const variantClasses = {
        primary: 'bg-primary-orange text-white',
        secondary: 'bg-accent-blue text-white',
        success: 'bg-accent-green text-white',
        outline: 'border-2 border-primary-orange text-primary-orange bg-white',
    };

    return (
        <div
            className={`
                ${sizeClasses[size]} 
                ${variantClasses[variant]} 
                rounded-lg 
                flex items-center justify-center 
                transition-all duration-300
                hover:scale-110 hover:shadow-lg
                ${className}
            `}
        >
            {icon}
        </div>
    );
};

export default IconBox;
