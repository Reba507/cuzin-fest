import React from 'react';

/**
 * Screen reader only text utility component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content for screen readers only
 * @param {React.ElementType} [props.as='span'] - HTML element to render
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {React.ReactElement} Screen reader only text
 */
const ScreenReaderOnly = ({
  children,
  as: Element = 'span', // eslint-disable-line no-unused-vars
  className = '',
  ...props
}) => (
  <Element className={`sr-only ${className}`} {...props}>
    {children}
  </Element>
);

export default ScreenReaderOnly;