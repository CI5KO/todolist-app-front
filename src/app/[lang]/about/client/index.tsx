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
