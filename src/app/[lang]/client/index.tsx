'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Button, Input } from '@/utils/components'

import BgImage from '../../../../public/img/bg-primary.jpg'

export default function ClientPage({
  params: { lang },
  dictionary,
}: {
  params: { lang: string }
  dictionary: any
}) {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <>
      <Image
        src={BgImage.src}
        alt="background image"
        height={BgImage.height}
        width={BgImage.width}
        placeholder="blur"
        blurDataURL={BgImage.blurDataURL}
        className="absolute inset-0 z-0 object-cover w-screen h-screen"
      />
      <section className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="bg-white/70 backdrop-blur p-8 rounded-lg shadow-lg w-3/4 md:w-1/2 xl:w-1/4">
          <h1 className="text-2xl font-bold mb-4">ToDo App</h1>
          <div className="grid gap-2">
            <Input
              title="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value.toLowerCase())}
            />
            <Input
              title="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={() => console.log('clicked')}>Login</Button>
          </div>
        </div>
      </section>
    </>
  )
}
