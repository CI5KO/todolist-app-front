'use client'

import { NavBar, ThemeSwitcher, LanguageSwitcher } from '@/utils/components'

import { type UserLogged } from '@/utils/services/user/types'
import { type AvailableLang } from '@/utils/lang'

export default function ClientPage({
  params: { lang },
  dictionary,
  user,
}: {
  params: { lang: AvailableLang }
  dictionary: any
  user: UserLogged
}) {
  return (
    <>
      <NavBar lang={lang} dictionary={dictionary} />
      <main className="grid md:pt-20">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </main>
    </>
  )
}
