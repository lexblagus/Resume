import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routes from './routes'
import GlobalStyle from './styles/global.styled';
import { BrowserRouter } from 'react-router-dom';

// =============================================================================

createRoot(document.getElementById('root')!).render(
  <StrictMode>
	<BrowserRouter>
		<GlobalStyle />
		<Routes />
	</BrowserRouter>
  </StrictMode>,
)
