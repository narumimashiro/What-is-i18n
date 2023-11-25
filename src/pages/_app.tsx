import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

// My Components
import I18nHeader from '@/components/molecules/I18nHeader'

// i18n
import { appWithTranslation } from 'next-i18next'
import '../../locales/i18n'

import '@/styles/globals.sass'

// Theme
import { useTheme } from '@/hooks/useTheme'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const lightTheme = createTheme({
  palette: {
    mode: 'light'
  }
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const I18nApp = ({ Component, pageProps }: AppProps) => {

  const isDarkMode = useTheme()
  const selectedTheme = isDarkMode ? darkTheme : lightTheme
    
  return (
    <RecoilRoot>
      <ThemeProvider theme={selectedTheme}>
        <CssBaseline />
        <I18nHeader>
          <Component {...pageProps} />
        </I18nHeader>
      </ThemeProvider>
    </RecoilRoot>
  )
}
export default appWithTranslation(I18nApp)