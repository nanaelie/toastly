import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../example/App'

createRoot(document.querySelector('body')!).render(
	<StrictMode>
		<App />
	</StrictMode>,
)