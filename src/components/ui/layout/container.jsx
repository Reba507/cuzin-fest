import React from 'react';

/**
 * Container component for consistent max-width and responsive padding
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Container content
 * @param {'default'|'narrow'|'wide'|'full'} [props.size='default'] - Container max-width
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {React.ElementType} [props.as='div'] - HTML element to render
 * @returns {React.ReactElement} Container component
 */
const Container = ({
  children,
  size = 'default',
  className = '',
  as: Element = 'div', // eslint-disable-line no-unused-vars
  ...props
}) => {
  const sizeClasses = {
    default: 'max-w-7xl',
    narrow: 'max-w-3xl',
    wide: 'max-w-screen-xl',
    full: 'max-w-none'
  };

  const containerClasses = `
    ${sizeClasses[size]}
    mx-auto
    px-4
    sm:px-6
    lg:px-8
    ${className}
  `.trim();

  return (
    <Element className={containerClasses} {...props}>
      {children}
    </Element>
  );
};

export default Container;