import React from 'react';
import { Button } from '.';

/**
 * Error boundary component for graceful error handling
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to wrap
 * @param {React.ComponentType} [props.fallback] - Custom fallback component
 * @param {Function} [props.onError] - Error callback function
 * @param {boolean} [props.showDetails=false] - Whether to show error details in development
 * @returns {React.ReactElement} Error boundary component
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    // Update state to show error UI
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details
    console.error('Error caught by ErrorBoundary:', error);
    console.error('Error info:', errorInfo);

    this.setState({
      error,
      errorInfo
    });

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback component
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return (
          <FallbackComponent
            error={this.state.error}
            errorInfo={this.state.errorInfo}
            resetError={this.handleReset}
          />
        );
      }

      // Default error UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8 text-center">
            <div>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Oops! Something went wrong
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                We're sorry for the inconvenience. The application encountered an unexpected error.
              </p>
            </div>

            <div className="space-y-4">
              <Button
                onClick={this.handleReset}
                variant="primary"
                size="large"
                className="w-full"
              >
                Try Again
              </Button>

              <Button
                onClick={() => window.location.reload()}
                variant="outline"
                size="large"
                className="w-full"
              >
                Reload Page
              </Button>

              <Button
                onClick={() => window.history.back()}
                variant="link"
                size="default"
                className="w-full"
              >
                Go Back
              </Button>
            </div>

            {(this.props.showDetails || import.meta.env.DEV) && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-sm font-medium text-gray-500 hover:text-gray-700">
                  Error Details (Development Only)
                </summary>
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                  <pre className="text-xs text-red-800 whitespace-pre-wrap overflow-x-auto">
                    {this.state.error.toString()}
                    {this.state.errorInfo && (
                      <>
                        {'\n\nComponent Stack:'}
                        {this.state.errorInfo.componentStack}
                      </>
                    )}
                  </pre>
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}


export default ErrorBoundary;