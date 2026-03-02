import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Landing from './pages/Landing/Landing.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
       <Landing/>   
    </BrowserRouter>    
)
