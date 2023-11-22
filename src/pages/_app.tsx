import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

// My Components
import I18nHeader from '@/components/molecules/I18nHeader'

// i18n
import { appWithTranslation } from 'next-i18next'
import '../../locales/i18n'

import '@/styles/globals.sass'

const I18nApp = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <I18nHeader>
      <Component {...pageProps} />
    </I18nHeader>
  </RecoilRoot>
)
export default appWithTranslation(I18nApp)