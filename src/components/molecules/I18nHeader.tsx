import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

// Recoil
import { useRecoilState } from 'recoil'
import { translate } from '@/recoil/language'

interface Props {
  children: ReactNode
}

const I18nHeader = ({ children }: Props) => {

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
      { children }
    </>
  )
}
export default I18nHeader