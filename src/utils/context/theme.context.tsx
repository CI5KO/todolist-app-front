'use client'

import { ThemeProvider } from 'next-themes'
import { useState, useEffect, type ReactNode } from 'react'

export function NextThemeProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <>{children}</>

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  )
}
