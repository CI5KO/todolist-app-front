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

import { clsx } from 'clsx'
import type { IconType } from 'react-icons'

interface ButtonProps {
  children?: string
  color?: 'Blue' | 'Green' | 'Red' | 'Orange' | 'Purple'
  disabled?: boolean
  Icon?: IconType
  onClick?: (e: any) => void
}

const getBorderColor = (color: string | undefined) => {
  switch (color) {
    case 'Blue':
      return 'border-primary'
    case 'Green':
      return 'border-ok'
    case 'Red':
      return 'border-danger'
    case 'Orange':
      return 'border-warning'
    case 'Purple':
      return 'border-secondary'
    default:
      return 'border-primary'
  }
}

export default function Button({
  disabled = false,
  children,
  color,
  Icon,
  onClick,
}: ButtonProps) {
  const borderColor = getBorderColor(color)
  return (
    <button
      disabled={disabled}
      className={clsx([
        'flex justify-between border-2 rounded-lg w-full',
        children ? 'px-4' : 'px-1.5',
        'py-1.5',
        disabled ? 'border-gray-500/50' : `shadow-md ${borderColor}`,
      ])}
      onClick={onClick}
    >
      {Icon && <Icon className="self-center" />}
      {children && (
        <p className="text-center text-sm font-bold antialiased self-center w-full p-1">
          {children}
        </p>
      )}
    </button>
  )
}
