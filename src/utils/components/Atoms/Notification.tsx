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
      return 'bg-ok'
    case 'warning':
      return 'bg-yellow-500'
    case 'error':
      return 'bg-danger'
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

  // fix for scroll issue
  const { warn, error } = console

  console.warn = (...args: any) => {
    if (
      /Skipping auto-scroll behavior due to `position: sticky` or `position: fixed` on element:/.test(
        args[0]
      )
    )
      return
    warn(...args)
  }
  console.error = (...args: any) => {
    if (/setOverflow/.test(args[0])) return
    error(...args)
  }

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
