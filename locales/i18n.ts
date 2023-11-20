const i18n = require('i18next')
const { initReactI18next } = require('react-i18next')
// 言語jsonファイルのimport
const t_en = require('./i18n/en.json')
const t_ja = require('./i18n/ja.json')
const t_zh = require('./i18n/zh.json')
const t_es = require('./i18n/es.json')
const t_de = require('./i18n/de.json')
const t_it = require('./i18n/it.json')
const t_fr = require('./i18n/fr.json')
const t_ru = require('./i18n/ru.json')

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
