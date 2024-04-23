/**
 * Author: CI5KO
 * Creation Date: April 14, 2024
 * Last Modification: April 23, 2024
 *
 * Contact: hector_oliva16k@hotmail.com
 *
 * This code is owned by CI5KO.
 * You are welcome to contribute to the original repository.
 *
 * Any contributions to this repository are subject to the original terms stated herein.
 */

import '../utils/styles/globals.css'

import { NextThemeProvider } from '@/utils/context/theme.context'
import montserrat from '@/utils/fonts/montserrat'

import type { Metadata } from 'next'
import type { ReactNode } from 'react'

const APP_NAME = 'Todo App'
const APP_DEFAULT_TITLE = 'Todo App'
const APP_TITLE_TEMPLATE = 'Todo App | %s'
const APP_DESCRIPTION = 'Todo App'

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  icons: {
    icon: '/icon-256x256.png',
  },
  manifest: '/manifest.json',
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>): JSX.Element {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-[#EAEAEA] dark:bg-[#232323]`}
      >
        <NextThemeProvider>{children}</NextThemeProvider>
      </body>
    </html>
  )
}
