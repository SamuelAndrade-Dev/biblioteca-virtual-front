import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'
import { LivroProvider } from './contexts/LivroContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
      <App />
    </BrowserRouter>
=======
    <LivroProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LivroProvider>
>>>>>>> 132173275788c860514c6babaf4df1e50d056d48
  </StrictMode>,
)
