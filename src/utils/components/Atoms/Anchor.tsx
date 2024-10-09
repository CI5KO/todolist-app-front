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

import clsx from 'clsx'
import { useRouter, usePathname } from 'next/navigation'

import { type AvailableLang } from '@/utils/lang'
import { type IconType } from 'react-icons'

interface AnchorProps {
  title: string
  path: string
  lang?: AvailableLang
  Icon: IconType
}

export default function Anchor({
  title,
  path,
  lang,
  Icon,
}: AnchorProps): JSX.Element {
  const router = useRouter()
  const pathname: string = usePathname()
  const isActivePath: boolean = pathname.endsWith(path)

  return (
    <div
      className="grid hover:cursor-pointer"
      onClick={() => router.push(`/${lang}${path}`)}
    >
      <Icon
        className={clsx('text-3xl justify-self-center md:hidden', {
          'text-primary': isActivePath,
        })}
      />
      <h1
        className={clsx('text-lg first-letter:uppercase', {
          'md:text-primary': isActivePath,
          'hover:md:text-secondary': !isActivePath,
        })}
      >
        {title}
      </h1>
    </div>
  )
}
