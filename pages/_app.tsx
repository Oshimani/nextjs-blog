import { AppProps } from 'next/app'

import '../styles/global.scss'

// persisten through navigation
// state manager
function App({ Component, pageProps }: AppProps) {
    return <Component { ...pageProps } />
  }

export default App
