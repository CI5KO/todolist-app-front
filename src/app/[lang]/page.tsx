'use server'

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
