import React from 'react';
import { Button } from './';

/**
 * Simple error fallback component
 * @param {Object} props - Component props
 * @param {Error} props.error - The error object
 * @param {Function} props.resetError - Function to reset error state
 * @returns {React.ReactElement} Simple error fallback
 */
const SimpleErrorFallback = ({ error, resetError }) => (
  <div className="p-8 bg-red-50 border border-red-200 rounded-lg text-center">
    <h3 className="text-lg font-medium text-red-800 mb-2">
      Something went wrong
    </h3>
    <p className="text-red-600 mb-4">
      {error?.message || 'An unexpected error occurred'}
    </p>
    <Button onClick={resetError} variant="primary" size="default">
      Try Again
    </Button>
  </div>
);

export default SimpleErrorFallback;