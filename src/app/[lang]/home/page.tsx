'use server'

import { type AvailableLang, getDictionary } from '@/utils/lang'
import { decodeJWT } from '@/utils/services/user/cookies'
import { getTasksByUserId } from './server/actions'
import { cookies } from 'next/headers'
import ClientPage from './client'

import { type UserLogged } from '@/utils/services/user/types'
import { type Task } from '@/utils/services/task/types'

export default async function Home({
  params: { lang },
}: {
  params: { lang: AvailableLang }
}) {
  const dictionary: any = await getDictionary(lang)
  const jwt: string | undefined = cookies().get('jwt')?.value

  if (!jwt) return <></>

  const user: UserLogged = decodeJWT(jwt)
  const tasks: Task[] = await getTasksByUserId(user.uuid)

  return (
    <ClientPage
      params={{ lang }}
      dictionary={dictionary}
      user={user}
      tasksData={tasks}
    />
  )
}
