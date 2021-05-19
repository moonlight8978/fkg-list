import { useCallback, useContext } from 'react'

import { createPersistContext } from '../utils/persist-context'

export enum Language {
  english = 'en',
  japanese = 'ja',
}

export const loadTranslations = async (language: string) => {
  switch (language) {
    case Language.english:
      return import('./translations/en.json')

    default:
      return import('./translations/ja.json')
  }
}

export const getBrowserLanguage = () => {
  const browserLanguage = navigator.language
  try {
    // @ts-expect-error
    return new Intl.Locale(browserLanguage).language
  } catch {
    return Language.japanese
  }
}

export const LanguageContext = createPersistContext<Language>(getBrowserLanguage() || Language.japanese, {
  key: 'language',
  version: 1,
})

export const useLanguage = (): [Language, (language: Language) => void] => {
  const [language, changeLanguage] = useContext(LanguageContext)

  const onLanguageChange = useCallback(
    (language: Language) => {
      changeLanguage(language)
      window.location.reload()
    },
    [changeLanguage]
  )

  return [language, onLanguageChange]
}
