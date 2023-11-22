import { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import styles from '@/styles/components/I18Header.module.sass'

// Recoil
import { useRecoilState } from 'recoil'
import { translate, langList } from '@/recoil/language'

// MaterialUI
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

interface Props {
  children: ReactNode
}

const I18nHeader = ({ children }: Props) => {

  const router = useRouter()
  const locale = router.query.locale_slug
  const { t, i18n } = useTranslation()
  const [language, setLanguage] = useRecoilState(translate)
  const [select, setLang] = useState(language)

  useEffect(() => {
    const urlpathList = langList.map(el => `/${el.urlpath}/i18n`) as string[]
    urlpathList.forEach(el => {
      router.prefetch(el)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (locale && typeof(locale) === 'string') {
      setLanguage(locale)
    }
    i18n.changeLanguage(language)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, i18n])

  const handlerChange = (e: SelectChangeEvent) => {
    setLang(e.target.value)
    // console.log(e.target.value) //for debug
    const locale = langList.find(el => el.disp === e.target.value)?.urlpath
    // console.log(`/${locale!}/i18n`) //for debug
    router.push(`/${locale!}/i18n`)
    setLanguage(locale!)
  }

  return (
    <>
      <div className={styles.header}>
        <Select
          className={styles.lang}
          id='select-lang'
          variant='standard'
          value={select}
          onChange={(e: SelectChangeEvent) => handlerChange(e)}
        >
          {
            langList.map((el, index) => (
              <MenuItem
                key={index}
                value={el.disp}
              >
                {t(`common.${el.disp}`)}
              </MenuItem>
            ))
          }
        </Select>
      </div>
      { children }
    </>
  )
}
export default I18nHeader