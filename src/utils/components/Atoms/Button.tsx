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
      return 'border-blue-500'
    case 'Green':
      return 'border-green-500'
    case 'Red':
      return 'border-red-500'
    case 'Orange':
      return 'border-orange-500'
    case 'Purple':
      return 'border-purple-500'
    default:
      return 'border-blue-500'
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
