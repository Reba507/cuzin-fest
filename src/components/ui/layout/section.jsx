import React from 'react';

/**
 * Reusable section component for consistent spacing and structure
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Section content
 * @param {'default'|'hero'|'compact'|'spacious'} [props.variant='default'] - Section spacing variant
 * @param {'white'|'gray'|'lime'|'teal'|'transparent'} [props.background='white'] - Background color
 * @param {boolean} [props.container=true] - Whether to use container max-width
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {string} [props.id] - Section id for anchor links
 * @param {React.ElementType} [props.as='section'] - HTML element to render
 * @returns {React.ReactElement} Section component
 */
const Section = ({
  children,
  variant = 'default',
  background = 'white',
  container = true,
  className = '',
  id,
  as: Element = 'section', // eslint-disable-line no-unused-vars
  ...props
}) => {
  const paddingClasses = {
    default: 'py-16',
    hero: 'pt-18 pb-24 sm:pb-32 lg:pt-36 lg:pb-62',
    compact: 'py-8',
    spacious: 'py-24 lg:py-32'
  };

  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    lime: 'bg-lime-500',
    teal: 'bg-teal-900',
    transparent: 'bg-transparent'
  };

  const sectionClasses = `
    ${paddingClasses[variant]}
    ${backgroundClasses[background]}
    ${className}
  `.trim();

  const content = container ? (
    <div className="container mx-auto px-4">
      {children}
    </div>
  ) : children;

  return (
    <Element
      id={id}
      className={sectionClasses}
      {...props}
    >
      {content}
    </Element>
  );
};

export default Section;