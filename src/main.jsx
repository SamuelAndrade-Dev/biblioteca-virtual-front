import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'
import { LivroProvider } from './contexts/LivroContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LivroProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LivroProvider>
  </StrictMode>,
)
