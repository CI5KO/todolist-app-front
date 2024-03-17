'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Button, Input, Notification } from '@/utils/components'
import BgImage from '../../../../public/img/bg-primary.jpg'

import { type LoginResponse } from '@/utils/services/user/types'

function validateEmailInput(email: string): boolean {
  const RegExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return RegExp.test(String(email).toLowerCase())
}

export default function ClientPage({
  serverLogin,
  params: { lang },
  dictionary,
}: {
  serverLogin(email: string, password: string): Promise<LoginResponse>
  params: { lang: string }
  dictionary: any
}) {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [honeypot, setHoneypot] = useState<string | undefined>()

  const [notification, setNotification] = useState<boolean>(false)

  const handleLogin = async () => {
    if (honeypot) {
      console.log(
        '%cBot Detected! \nAccess Denied',
        'color: red; font-size: 20px'
      )
      return
    }

    const response = await serverLogin(email, password)
    if (!response.jwt) {
      setNotification(true)
      return
    }
  }

  const isSubmitDisable = (): boolean =>
    email === '' || password === '' || !validateEmailInput(email)

  return (
    <>
      <Notification
        title="Login Error"
        type="error"
        activation={notification}
        timeInSeconds={2}
        onClose={() => setNotification(false)}
      >
        Something went wrong
      </Notification>
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
            <div style={{ display: 'none' }} aria-hidden="true">
              <input
                title="Leave this field empty"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
              />
            </div>
            <Button onClick={handleLogin} disabled={isSubmitDisable()}>
              Login
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
