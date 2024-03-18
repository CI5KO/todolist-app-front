'use server'

import { CiViewList } from 'react-icons/ci'

export default async function Loading(): Promise<JSX.Element> {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <CiViewList className="animate-spin h-32 w-32" />
    </div>
  )
}
