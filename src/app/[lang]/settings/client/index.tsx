'use client'

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
        <Divider text={dictionary.settings.theme} />
        <div className="flex flex-row justify-between pb-4">
          <p className="self-center">{dictionary.settings.theme}:</p>
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
        <Divider text={dictionary.settings.language} />
        <div className="flex flex-row justify-between">
          <p className="self-center">{dictionary.settings.language}:</p>
          <LanguageSwitcher />
        </div>
        <Divider text={dictionary.settings.user} />
        <div className="grid">
          <p className="pb-4">{user.name}</p>
          <Button color="Red" onClick={handleLogout}>
            {dictionary.settings.logout}
          </Button>
        </div>
      </main>
    </>
  )
}
