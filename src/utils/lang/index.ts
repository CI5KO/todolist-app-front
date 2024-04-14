/**
 * Author: CI5KO
 * Creation Date: April 14, 2024
 * Last Modification: April 14, 2024
 *
 * Contact: hector_oliva16k@hotmail.com
 *
 * This code is owned by CI5KO.
 * You are welcome to contribute to the original repository.
 *
 * Any contributions to this repository are subject to the original terms stated herein.
 */

export type AvailableLang = 'en' | 'es'

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  es: () => import('./es.json').then((module) => module.default),
}

export const getDictionary = async (locale: AvailableLang) => {
  if (!dictionaries.hasOwnProperty(locale)) return dictionaries['en']()
  return dictionaries[locale]()
}
