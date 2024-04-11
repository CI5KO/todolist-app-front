'use client'

import Image from 'next/image'

import { NavBar } from '@/utils/components'
import { type AvailableLang } from '@/utils/lang'

export default function ClientPage({
  params: { lang },
  dictionary,
}: {
  params: { lang: AvailableLang }
  dictionary: any
}) {
  return (
    <>
      <NavBar lang={lang} dictionary={dictionary} />
      <main>
        <h1>About Me</h1>
      </main>
    </>
  )
}
