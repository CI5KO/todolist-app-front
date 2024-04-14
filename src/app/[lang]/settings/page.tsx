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

import { type AvailableLang, getDictionary } from '@/utils/lang'
import { decodeJWT } from '@/utils/services/user/cookies'
import { cookies } from 'next/headers'
import ClientPage from './client'

import { type UserLogged } from '@/utils/services/user/types'

export default async function Settings({
  params: { lang },
}: {
  params: { lang: AvailableLang }
}) {
  const dictionary: any = await getDictionary(lang)
  const jwt: string | undefined = cookies().get('jwt')?.value

  if (!jwt) return <></>

  const user: UserLogged = decodeJWT(jwt)

  return <ClientPage params={{ lang }} dictionary={dictionary} user={user} />
}
