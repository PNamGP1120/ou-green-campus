import React from 'react';
import { HashRouter } from 'react-router-dom'; // Dùng HashRouter cho GitHub Pages
import { AuthProvider } from './providers/AuthProvider';
import AppRoutes from './routes';

function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </AuthProvider>
  );
}
export default App;