import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <BrowserRouter>
      <StrictMode>
        <App/>
      </StrictMode>
    </BrowserRouter>
  </div>
)