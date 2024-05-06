'use client'

/**
 * Author: CI5KO
 * Creation Date: April 14, 2024
 * Last Modification: May 05, 2024
 *
 * Contact: hector_oliva16k@hotmail.com
 *
 * This code is owned by CI5KO.
 * You are welcome to contribute to the original repository.
 *
 * Any contributions to this repository are subject to the original terms stated herein.
 */

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import {
  Button,
  CardLink,
  Divider,
  NavBar,
  Rate,
  TextArea,
} from '@/utils/components'

import { type AvailableLang } from '@/utils/lang'
import { type UserLogged } from '@/utils/services/user/types'

import { IoLogoGithub, IoGitBranch } from 'react-icons/io5'

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
  const [rate, setRate] = useState<number>(0)
  const [feedback, setFeedback] = useState<string>('')

  const disableSubmitRate = (): boolean => !(rate > 0 && feedback !== '')

  return (
    <>
      <NavBar lang={lang} dictionary={dictionary} />
      <main>
        <Divider text="Docs" />
        <CardLink
          text={dictionary.about.githubProfile}
          Icon={IoLogoGithub}
          onClick={() => router.push('https://github.com/CI5KO')}
        />
        <CardLink
          text={dictionary.about.githubRepoFront}
          Icon={IoGitBranch}
          onClick={() =>
            router.push('https://github.com/CI5KO/todolist-app-front')
          }
        />
        <CardLink
          text={dictionary.about.githubRepoBack}
          Icon={IoGitBranch}
          onClick={() =>
            router.push('https://github.com/CI5KO/todolist-app-back')
          }
        />
        <Divider text="Feedback" />
        <section className="grid gap-4">
          <Rate value={rate} onClick={(rate) => setRate(rate)} />
          <TextArea
            title="Leave a coment"
            value={feedback}
            onChange={setFeedback}
          />
          <Button color="Green" disabled={disableSubmitRate()}>
            Submit Rate
          </Button>
        </section>
      </main>
    </>
  )
}
