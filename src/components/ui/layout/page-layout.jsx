import React from 'react';
import { Navigation } from '../';

/**
 * Consistent page layout wrapper component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content
 * @param {'header'|'hero'|'none'} [props.navigation='header'] - Navigation variant to display
 * @param {Object} [props.navigationProps={}] - Props to pass to Navigation component
 * @param {boolean} [props.showFooter=true] - Whether to show footer
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {string} [props.contentClassName=''] - Additional CSS classes for content area
 * @returns {React.ReactElement} Page layout component
 */
const PageLayout = ({
  children,
  navigation = 'header',
  navigationProps = {},
  showFooter = true,
  className = '',
  contentClassName = ''
}) => {
  return (
    <div className={`antialiased bg-body text-body font-body ${className}`}>
      {navigation !== 'none' && (
        <Navigation variant={navigation} {...navigationProps} />
      )}

      <main className={`flex-1 ${contentClassName}`} role="main">
        {children}
      </main>

      {showFooter && (
        <footer className="mt-auto">
          {/* Footer content will be added when we consolidate footer components */}
        </footer>
      )}
    </div>
  );
};

export default PageLayout;