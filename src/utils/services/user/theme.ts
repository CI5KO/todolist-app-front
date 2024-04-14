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

import { type ThemeProps } from '@/utils/context/theme.context'

export function updateUserColor(newColors: ThemeProps): void {
  document.documentElement.style.setProperty(
    '--color-primary',
    newColors.primary
  )
  document.documentElement.style.setProperty(
    '--color-secondary',
    newColors.secondary
  )
  document.documentElement.style.setProperty('--color-ok', newColors.ok)
  document.documentElement.style.setProperty(
    '--color-warning',
    newColors.warning
  )
  document.documentElement.style.setProperty('--color-danger', newColors.danger)

  localStorage.setItem('colors', JSON.stringify(newColors))
  return
}

export function resetUserColor(): void {
  updateUserColor(AvailableThemes[0])
}

export function getUserColor(): ThemeProps {
  const colors = localStorage.getItem('colors')
  return colors ? JSON.parse(colors) : AvailableThemes[0]
}

export const AvailableThemes: ThemeProps[] = [
  {
    themeName: 'Default',
    primary: '#3b82f6',
    secondary: '#a855f7',
    ok: '#22c55e',
    warning: '#f97316',
    danger: '#ef4444',
  },
  {
    themeName: 'Pinky',
    primary: '#cdb4db',
    secondary: '#ffc8dd',
    ok: '#bde0fe',
    warning: '#a2d2ff',
    danger: '#ffafcc',
  },
  {
    themeName: 'Abstract',
    primary: '#390099',
    secondary: '#9e0059',
    ok: '#ffbd00',
    warning: '#ff5400',
    danger: '#ff0054',
  },
  {
    themeName: 'Colorfull',
    primary: '#ffbe0b',
    secondary: '#fb5607',
    ok: '#3a86ff',
    warning: '#8338ec',
    danger: '#ff006e',
  },
]
