export type AvailableLang = 'en' | 'es'

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  es: () => import('./es.json').then((module) => module.default),
}

export const getDictionary = async (locale: AvailableLang) => {
  if (!dictionaries.hasOwnProperty(locale)) return dictionaries['en']()
  return dictionaries[locale]()
}