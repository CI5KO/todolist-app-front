'use server'

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

import ClientPage from './client'
import { login, register } from './server/actions'

import { type AvailableLang, getDictionary } from '@/utils/lang'

export default async function Home({
  params: { lang },
}: {
  params: { lang: AvailableLang }
}) {
  const dictionary: any = await getDictionary(lang)

  return (
    <ClientPage
      params={{ lang }}
      dictionary={dictionary}
      serverLogin={login}
      serverRegister={register}
    />
  )
}
