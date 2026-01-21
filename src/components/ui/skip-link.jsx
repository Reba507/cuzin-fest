import React from 'react';

/**
 * Skip link component for keyboard navigation accessibility
 * @param {Object} props - Component props
 * @param {string} [props.href='#main'] - Target anchor for skip link
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {React.ReactNode} [props.children='Skip to main content'] - Link text
 * @returns {React.ReactElement} Skip link component
 */
const SkipLink = ({
  href = '#main',
  className = '',
  children = 'Skip to main content'
}) => (
  <a
    href={href}
    className={`sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded transition-all duration-200 font-medium ${className}`}
    style={{ zIndex: 9999 }}
  >
    {children}
  </a>
);

export default SkipLink;