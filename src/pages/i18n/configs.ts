import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// 言語jsonファイルのimport
import t_en from './en.json'
import t_ja from './ja.json'
import t_zh from './zh.json'
import t_es from './es.json'
import t_de from './de.json'
import t_it from './it.json'
import t_fr from './fr.json'
import t_ru from './ru.json'

const resources = {
  'ja': {
    translation: t_ja
  },
  'en': {
    translation: t_en
  },
  'zh': {
    translation: t_zh
  },
  'es': {
    translation: t_es
  },
  'de': {
    translation: t_de
  },
  'it': {
    translation: t_it
  },
  'fr': {
    transkation: t_fr
  },
  'ru': {
    translation: t_ru
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ja", 
    interpolation: {
      escapeValue: false
    }
  })

  export default i18n