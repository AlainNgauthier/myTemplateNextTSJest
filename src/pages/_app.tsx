// PNG icon for Android Chrome
// apple-touch-icon Apple Touch icon (for iPhone 6 Plus; other device will scale it down as needed).
import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>My Template for NextJS Projects</title>
                <link rel="shortcut icon" type="image/png" href="/img/favicon.png" />
                <link rel="apple-touch-icon" href="/img/favicon.svg"/>
                <meta 
                    name="description" 
                    content="Project starter to work with TypeScript, React, NextJS and Styled-Components" 
                />
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    )
  }

  export default App