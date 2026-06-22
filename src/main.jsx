import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'
import { LivrosProvider } from './context/LivrosContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LivrosProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LivrosProvider>
  </StrictMode>,
)
