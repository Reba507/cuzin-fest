import ErrorBoundary from '../components/ui/error-boundary';
import SkipLink from '../components/ui/skip-link';

export function AppProvider({ children }) {
  return (
    <ErrorBoundary>
      <SkipLink />
      {children}
    </ErrorBoundary>
  );
}