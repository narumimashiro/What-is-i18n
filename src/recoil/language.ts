import { atom, selector } from 'recoil'
import i18n from "i18next"

export const languageState = atom<string>({
  key: 'i18nLanguage',
  default: 'ja'
})

export const translate = selector({
  key: 'translate',
  get: ({ get }) => {
    const language = get(languageState)
    return language
  },
  set: ({ set }, locale) => {
    switch (locale) {
      case 'ja-jp':
        set(languageState, 'ja'); break
      case 'en-us':
        set(languageState, 'en'); break
      case 'de-ge':
        set(languageState, 'de'); break
      case 'es-sp':
        set(languageState, 'es'); break
      case 'fr-re':
        set(languageState, 'fr'); break
      case 'it-it':
        set(languageState, 'it'); break
      case 'ru-fe':
        set(languageState, 'ru'); break
      case 'zh-cn':
        set(languageState, 'zh'); break
      default:
        set(languageState, 'ja'); break
    }
  }
})