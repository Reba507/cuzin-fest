import React from 'react';

/**
 * Responsive grid component for consistent layouts
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Grid content
 * @param {number|Object} [props.cols=1] - Number of columns or responsive object {sm: 1, md: 2, lg: 3}
 * @param {string} [props.gap='4'] - Gap between grid items (Tailwind spacing scale)
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {React.ElementType} [props.as='div'] - HTML element to render
 * @returns {React.ReactElement} Grid component
 */
const Grid = ({
  children,
  cols = 1,
  gap = '4',
  className = '',
  as: Element = 'div', // eslint-disable-line no-unused-vars
  ...props
}) => {
  let gridClasses = '';

  if (typeof cols === 'number') {
    const colsMap = {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      12: 'grid-cols-12'
    };
    gridClasses = colsMap[cols] || 'grid-cols-1';
  } else {
    // Responsive columns object
    const responsive = [];
    if (cols.sm) responsive.push(`sm:grid-cols-${cols.sm}`);
    if (cols.md) responsive.push(`md:grid-cols-${cols.md}`);
    if (cols.lg) responsive.push(`lg:grid-cols-${cols.lg}`);
    if (cols.xl) responsive.push(`xl:grid-cols-${cols.xl}`);

    gridClasses = `grid-cols-1 ${responsive.join(' ')}`;
  }

  const containerClasses = `
    grid
    ${gridClasses}
    gap-${gap}
    ${className}
  `.trim();

  return (
    <Element className={containerClasses} {...props}>
      {children}
    </Element>
  );
};

export default Grid;