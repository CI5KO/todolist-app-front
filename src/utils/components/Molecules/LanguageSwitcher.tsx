'use client'

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
    console.log(e)
    const path: string | undefined = pathname?.slice(3)
    const push: string = `/${e}${path === undefined ? '' : `/${path}`}`
    router.push(push)
  }

  return (
    <Select
      selected={languages.find((lang) => lang.value === currentLanguage)}
      options={languages}
      onChange={onChange}
    />
  )
}
