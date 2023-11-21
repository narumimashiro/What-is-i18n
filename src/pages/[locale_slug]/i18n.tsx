import Head from 'next/head'
import { useTranslation } from 'next-i18next'

const I18n = () => {

  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>B.T.W | {t('i18n.PAGE_TITLE')}</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>{t('i18n.PAGE_TITLE')}</h1>
      </div>
    </>
  )
}

export default I18n