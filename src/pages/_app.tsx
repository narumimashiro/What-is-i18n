import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

// i18n
import { appWithTranslation } from 'next-i18next'
import '../../locales/i18n'

import '@/styles/globals.sass'

const I18nApp = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>
)
export default appWithTranslation(I18nApp)