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

import { Select } from '..'
import { useRouter, usePathname } from 'next/navigation'

type SelectDataProps = {
  label: string
  value: string
}

export default function LanguageSwitcher(): JSX.Element {
  const router = useRouter()
  const pathname: string | null = usePathname()
  const currentLanguage: string = pathname?.split('/')[1] || 'en'

  const languages: SelectDataProps[] = [
    {
      label: 'English',
      value: 'en',
    },
    {
      label: 'Español',
      value: 'es',
    },
  ]

  const onChange = (e: any) => {
    const path: string | undefined = pathname?.slice(3)
    const push: string = `/${e}${path === undefined ? '' : `/${path}`}`
    router.push(push)
  }

  return (
    <Select
      label="Languages"
      selected={languages.find((lang) => lang.value === currentLanguage)}
      options={languages}
      onChange={onChange}
    />
  )
}
