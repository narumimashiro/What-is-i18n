import { atom, selector } from 'recoil'

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
      case 'ja':
        set(languageState, 'ja'); break
      case 'en-us':
      case 'en':
        set(languageState, 'en'); break
      case 'de-ge':
      case 'dee':
        set(languageState, 'de'); break
      case 'es-sp':
      case 'es':
        set(languageState, 'es'); break
      case 'fr-re':
      case 'fr':
        set(languageState, 'fr'); break
      case 'it-it':
      case 'it':
        set(languageState, 'it'); break
      case 'ru-fe':
      case 'ru':
        set(languageState, 'ru'); break
      case 'zh-cn':
      case 'zh':
        set(languageState, 'zh'); break
      default:
        set(languageState, 'ja'); break
    }
  }
})