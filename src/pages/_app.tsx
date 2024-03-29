import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Menu from '../components/Menu'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <Menu />
            <main>
                <Component {...pageProps} />
            </main>
            <GlobalStyle />
        </ThemeProvider>
    )
}

export default MyApp
