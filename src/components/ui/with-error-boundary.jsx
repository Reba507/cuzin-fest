import React from 'react';
import ErrorBoundary from './error-boundary';

/**
 * Hook-based error boundary wrapper for functional components
 * @param {React.ComponentType} Component - Component to wrap
 * @param {Object} [errorBoundaryProps={}] - Props to pass to ErrorBoundary
 * @returns {React.ComponentType} Wrapped component
 */
const withErrorBoundary = (Component, errorBoundaryProps = {}) => {
  const WrappedComponent = (props) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  return WrappedComponent;
};

export default withErrorBoundary;