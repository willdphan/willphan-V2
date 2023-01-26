import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes'
import Web3Provider from '@/components/Web3Provider'
import 'src/styles/globals.css'
import { AnimatePresence } from 'framer-motion'

const App = ({ Component, pageProps }) => {
	return (
		<ThemeProvider attribute="class">
			<AnimatePresence exitBeforeEnter>
				<Component {...pageProps} />
			</AnimatePresence>
		</ThemeProvider>
	)
}

export default App
