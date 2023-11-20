import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

// Recoil
import { useRecoilState } from 'recoil'
import { translate } from '@/recoil/language'

const I18n = () => {

  const router = useRouter()
  const locale = router.query.locale_slug
  const { t, i18n } = useTranslation()
  const [language, setLanguage] = useRecoilState(translate)

  useEffect(() => {
    if (locale && typeof(locale) === 'string') {
      setLanguage(locale)
    }
    i18n.changeLanguage(language)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, i18n])

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