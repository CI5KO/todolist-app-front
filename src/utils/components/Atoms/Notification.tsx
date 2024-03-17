'use client'

import { useEffect, useState } from 'react'

interface NotificationProps {
  type: 'ok' | 'warning' | 'error'
  title: string
  children: string | JSX.Element
  activation: boolean
  timeInSeconds?: number
  onClose: () => void
}

const getColorByType = (type: string): string => {
  switch (type) {
    case 'ok':
      return 'bg-green-500'
    case 'warning':
      return 'bg-yellow-500'
    case 'error':
      return 'bg-red-500'
    default:
      return 'bg-black'
  }
}

export default function Notification({
  type,
  title,
  children,
  activation = false,
  timeInSeconds = 3,
  onClose,
}: NotificationProps): JSX.Element {
  const [progress, setProgress] = useState<number>(0)
  const color: string = getColorByType(type)

  useEffect(() => {
    if (!activation) {
      setProgress(0)
      return
    }

    setTimeout(() => {
      onClose()
    }, timeInSeconds * 1000)

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1
        return newProgress <= 100 ? newProgress : 0
      })
    }, timeInSeconds * 10)

    return () => clearInterval(interval)
  }, [activation])

  return (
    <div
      className={`fixed top-20 md:top-40 md:right-20 ${color} mx-4 md:mx-0 w-11/12 md:w-[500px] h-fit z-30 rounded-md shadow-lg transition-all ease-in-out duration-200 overflow-hidden`}
      style={{
        transform: activation ? 'translateX(0)' : 'translateX(120%)',
      }}
    >
      <h1 className="pb-2 text-lg font-semibold px-4 pt-4">{title}</h1>
      <div className="px-4">{children}</div>
      <div
        className="relative bottom-0 left-0 h-[5px] bg-white mt-4 transition-all duration-100 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
