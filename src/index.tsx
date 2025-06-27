import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import App from './App';
import './styles/tailwind.css';
import './styles/index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
}