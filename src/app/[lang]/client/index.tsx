'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { saveJWT } from '@/utils/services/user/cookies'

import { Button, Input, Notification } from '@/utils/components'
import { validateEmailInput } from '@/utils/components/Atoms/Input'

import BgImage from '../../../../public/img/bg-primary.jpg'

import type { User, LoginResponse } from '@/utils/services/user/types'

interface ClientPageProps {
  serverLogin(email: string, password: string): Promise<LoginResponse>
  serverRegister(name: string, email: string, password: string): Promise<User>
  params: { lang: string }
  dictionary: any
}

type NotificationProps = {
  title: string
  type: string
  description: string
}

export default function ClientPage({
  serverLogin,
  serverRegister,
  params: { lang },
  dictionary,
}: ClientPageProps): JSX.Element {
  const router = useRouter()

  const [mode, setMode] = useState<'login' | 'register'>('login')

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [honeypot, setHoneypot] = useState<string | undefined>(undefined)

  const [notification, setNotification] = useState<boolean>(false)
  const [notificationData, setNotificationData] = useState<NotificationProps>({
    title: '',
    type: 'ok',
    description: '',
  })

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
      setNotificationData({
        title: 'Login Error',
        type: 'error',
        description: 'Something went wrong',
      })
      return
    }
    saveJWT(response.jwt)
    router.push(`/${lang}/home`)
  }

  const handleRegister = async () => {
    if (honeypot) {
      console.log(
        '%cBot Detected! \nAccess Denied',
        'color: red; font-size: 20px'
      )
      return
    }
    const response = await serverRegister(name, email, password)
    if (!response.uuid) {
      setNotification(true)
      setNotificationData({
        title: 'Register Error',
        type: 'error',
        description: 'Something went wrong',
      })
      return
    }
    setNotification(true)
    setNotificationData({
      title: 'Register Success',
      type: 'ok',
      description: 'You can now login',
    })
  }

  const isLoginSubmit = (): boolean =>
    email === '' || password === '' || !validateEmailInput(email)

  const isRegisterSubmit = (): boolean =>
    name === '' ||
    email === '' ||
    password === '' ||
    confirmPassword === '' ||
    password !== confirmPassword ||
    !validateEmailInput(email)

  return (
    <>
      <Notification
        title={notificationData.title}
        type={notificationData.type as 'ok' | 'error' | 'warning'}
        activation={notification}
        timeInSeconds={2}
        onClose={() => setNotification(false)}
      >
        {notificationData.description}
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
      <section className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 text-center w-3/4 md:w-1/2 xl:w-1/4 select-none">
          <p
            className={`${
              mode === 'login' ? 'bg-white/70' : 'bg-white/50 cursor-pointer'
            } backdrop-blur rounded-tl-lg p-2`}
            onClick={() => setMode('login')}
          >
            login
          </p>
          <p
            className={`${
              mode === 'register' ? 'bg-white/70' : 'bg-white/50 cursor-pointer'
            } backdrop-blur rounded-tr-lg p-2`}
            onClick={() => setMode('register')}
          >
            Register
          </p>
        </div>
        <div className="bg-white/70 backdrop-blur p-8 rounded-b-lg shadow-lg w-3/4 md:w-1/2 xl:w-1/4">
          <h1 className="text-2xl text-center font-bold mb-4">ToDo App</h1>

          <div className={`${mode === 'login' ? 'grid' : 'hidden'} gap-2`}>
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
                title="Confirm Email"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
              />
            </div>
            <Button onClick={handleLogin} disabled={isLoginSubmit()}>
              Login
            </Button>
          </div>

          <div className={`${mode === 'register' ? 'grid' : 'hidden'} gap-2`}>
            <Input
              title="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            <Input
              title="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div style={{ display: 'none' }} aria-hidden="true">
              <input
                title="Confirm Email"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
              />
            </div>
            <Button onClick={handleRegister} disabled={isRegisterSubmit()}>
              Register
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
