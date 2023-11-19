import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

const I18n = () => {

  const router = useRouter()
  const locale = router.query
  const { t } = useTranslation()
  // i18n.changeLanguage(`${locale.locale_slug}`)

  // {lng: `${locale.locale_slug}`}

  return (
    <>
      <Head>
        <title>B.T.W | {t('i18n.PAGE_TITLE', {lng: `${locale.locale_slug}`})}</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>{t('i18n.PAGE_TITLE', {lng: `${locale.locale_slug}`})}</h1>
      </div>
    </>
  )
}

export default I18n