'use client'

import { ThemeProvider } from 'next-themes'
import { useState, useEffect, type ReactNode } from 'react'

export type ThemeProps = {
  themeName: string
  primary: string
  secondary: string
  ok: string
  warning: string
  danger: string
}

export function NextThemeProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState<boolean>(false)

  const loadUserColors = () => {
    const colors = localStorage.getItem('colors')
    if (!colors) return

    const theme: ThemeProps = JSON.parse(colors)
    document.documentElement.style.setProperty('--color-primary', theme.primary)
    document.documentElement.style.setProperty(
      '--color-secondary',
      theme.secondary
    )
    document.documentElement.style.setProperty('--color-ok', theme.ok)
    document.documentElement.style.setProperty('--color-warning', theme.warning)
    document.documentElement.style.setProperty('--color-danger', theme.danger)
  }

  useEffect(() => {
    setMounted(true)
    loadUserColors()
  }, [])

  if (!mounted) return <>{children}</>

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  )
}
