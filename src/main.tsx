import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Binding from './components/Binding'
import GlobalStyle from './styles/global.styled';

// =============================================================================

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <Binding />
  </StrictMode>,
)
