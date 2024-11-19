import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <p className="text-gray-500 p-5">works</p>

    <App />
  </StrictMode>,
)
