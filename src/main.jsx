import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { DarkModeProvider } from './DarkModeContext.jsx';
import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <DarkModeProvider>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </DarkModeProvider>
);