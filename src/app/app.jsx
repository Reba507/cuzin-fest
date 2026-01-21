import { RouterProvider } from 'react-router-dom';
import { AppProvider } from './provider';
import { router } from './router';

function App() {
  return (
    <AppProvider>
      <div id="app" className="min-h-screen flex flex-col">
        <main id="main" className="flex-1">
          <RouterProvider router={router} />
        </main>
      </div>
    </AppProvider>
  );
}

export default App;