'use client'

import clsx from 'clsx'
import { useRouter, usePathname } from 'next/navigation'

import { type AvailableLang } from '@/utils/lang'
import { type IconType } from 'react-icons'

interface AnchorProps {
  path: string
  lang?: AvailableLang
  Icon: IconType
}

export default function Anchor({ path, lang, Icon }: AnchorProps): JSX.Element {
  const router = useRouter()
  const pathname = usePathname()
  const isActivePath: boolean = pathname.endsWith(path)

  return (
    <div
      className="grid hover:cursor-pointer"
      onClick={() => router.push(`/${lang}/${path}`)}
    >
      <Icon
        className={clsx('text-3xl justify-self-center md:hidden', {
          'text-blue-500': isActivePath,
        })}
      />
      <h1
        className={clsx('text-lg first-letter:uppercase', {
          'md:text-blue-500': isActivePath,
          'hover:md:text-purple-500': !isActivePath,
        })}
      >
        {path}
      </h1>
    </div>
  )
}