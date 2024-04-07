'use client'

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
    ok: '#ffafcc',
    warning: '#bde0fe',
    danger: '#a2d2ff',
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
