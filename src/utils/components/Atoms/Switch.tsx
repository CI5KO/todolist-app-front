import { IoMdClose, IoMdCheckmark } from 'react-icons/io'
import { type IconType } from 'react-icons'

interface ToggleSwitchProps {
  checked?: boolean
  OnIcon?: IconType
  OffIcon?: IconType
  onChange: (value: boolean) => void
}

export default function Switch({
  checked,
  OnIcon = IoMdCheckmark,
  OffIcon = IoMdClose,
  onChange,
}: ToggleSwitchProps) {
  const toggleSwitch = () => onChange(!checked)

  return (
    <label className="flex items-center cursor-pointer w-fit">
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={toggleSwitch}
      />
      <div
        className={`relative shadow-lg w-14 h-8 rounded-lg transition-all duration-300 border-2 border-primary ${
          checked ? '' : ''
        }`}
      >
        <div
          className={`absolute top-1 w-5 h-5 self-center rounded-lg shadow-md transform ${
            checked
              ? 'translate-x-8 bg-black text-white'
              : 'translate-x-1 bg-white text-black'
          } transition-all duration-300 flex items-center justify-center`}
        >
          {checked ? <OnIcon /> : <OffIcon />}
        </div>
      </div>
    </label>
  )
}
