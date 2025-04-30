import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyled } from "./Styles/globalStyles"
import Home from './Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyled/>
    <Home />
  </StrictMode>,
)
