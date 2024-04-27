'use server'

import ClientPage from './client'

export default async function Offline({}): Promise<JSX.Element> {
  return <ClientPage />
}
