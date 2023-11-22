import { atom, selector } from 'recoil'

export const langList = [
  { disp: 'ja', urlpath: 'ja-jp' },
  { disp: 'en', urlpath: 'en-us' },
  { disp: 'de', urlpath: 'de-ge' },
  { disp: 'es', urlpath: 'es-sp' },
  { disp: 'fr', urlpath: 'fr-re' },
  { disp: 'it', urlpath: 'it-it' },
  { disp: 'zh', urlpath: 'zh-cn' },
  { disp: 'ru', urlpath: 'ru-fe' },
] as {
  disp: string,
  urlpath: string
}[]

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
      case 'de':
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