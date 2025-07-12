import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log('✅ main.jsx loaded');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

document.getElementById('root').innerHTML = '<h1 style="color:red;">✅ Plain JS works</h1>';
