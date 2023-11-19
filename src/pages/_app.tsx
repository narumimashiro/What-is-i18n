import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

// i18n
import "./i18n/configs"

import '@/styles/globals.sass'

const I18nApp = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>
)
export default I18nApp
