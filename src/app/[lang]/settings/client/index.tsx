'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import {
  Divider,
  Button,
  ColorsCard,
  NavBar,
  ThemeSwitcher,
  LanguageSwitcher,
} from '@/utils/components'

import {
  getUserColor,
  updateUserColor,
  AvailableThemes,
  resetUserColor,
} from '@/utils/services/user/theme'
import { removeJWT } from '@/utils/services/user/cookies'

import { type ThemeProps } from '@/utils/context/theme.context'
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
  const router = useRouter()

  const [currentColors, setCurrentColors] = useState<ThemeProps>(
    AvailableThemes[0]
  )

  useEffect(() => {
    const colors = getUserColor()
    setCurrentColors(colors)
  }, [])

  const handleLogout = () => {
    resetUserColor()
    removeJWT()
    router.push(`/${lang}`)
  }

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
            <ColorsCard
              id="colors"
              key={theme.themeName}
              selected={currentColors.themeName === theme.themeName}
              theme={theme}
              onSelect={(newColors) => {
                setCurrentColors(newColors)
                updateUserColor(newColors)
              }}
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
          <Button color="Red" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </main>
    </>
  )
}
