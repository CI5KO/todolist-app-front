'use client'

import {
  Divider,
  Button,
  NavBar,
  ThemeSwitcher,
  LanguageSwitcher,
} from '@/utils/components'

import ThemeColors from '@/utils/components/Atoms/ThemeColors'

import { updateUserColor, AvailableThemes } from '@/utils/services/user/theme'

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
        <Divider text="Theme" />
        <div className="flex flex-row justify-between pb-4">
          <p className="self-center">Theme:</p>
          <ThemeSwitcher />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {AvailableThemes.map((theme) => (
            <ThemeColors
              key={theme.themeName}
              theme={theme}
              onSelect={updateUserColor}
            />
          ))}
        </div>
        <Divider text="Language" />
        <div className="flex flex-row justify-between">
          <p className="self-center">Language:</p>
          <LanguageSwitcher />
        </div>
        <Divider text="User" />
        <div className="grid">
          <p className="pb-4">{user.name}</p>
          <Button color="Red">Logout</Button>
        </div>
      </main>
    </>
  )
}
