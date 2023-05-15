{/* Global Styles TypeScript Version */}
// import '@/styles/globals.css'
import '../styles/global.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
