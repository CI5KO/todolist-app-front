import { useState } from 'react'

import { GrFormView, GrFormViewHide } from 'react-icons/gr'
import { IoIosClose } from 'react-icons/io'

interface inputProps {
  title?: string
  type?: string
  step?: string
  placeholder?: string
  disabled?: boolean
  value?: string | number
  onChange?: (e?: any) => void
  onBlur?: (e?: any) => void
}

function validateEmailInput(email: string): boolean {
  const RegExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return RegExp.test(String(email).toLowerCase())
}

export default function Input({
  title,
  type = 'text',
  step,
  disabled = false,
  onChange,
  onBlur,
  value,
  placeholder,
}: inputProps): JSX.Element {
  const [inputType, setInputType] = useState<string>(type)
  const [inputColor, setInputColor] = useState<string>('blue')

  return (
    <div>
      <div className="flex items-center relative">
        <input
          placeholder={placeholder || title}
          className={`border-2 border-${inputColor}-500 w-full rounded-lg px-4 py-2 shadow-md transition duration-75 bg-transparent`}
          type={inputType}
          min={1}
          step={step}
          disabled={disabled}
          onBlur={onBlur}
          onChange={(event) => {
            if (type === 'email' && !validateEmailInput(event.target.value))
              setInputColor('red')
            else setInputColor('blue')

            event.preventDefault()

            onChange && onChange(event)
          }}
          value={value}
        />
        {type === 'password' && (
          <button
            className="p-2 self-center right-2 absolute text-2xl"
            type="button"
            onClick={(e) => {
              e.preventDefault()
              setInputType(inputType === 'password' ? 'text' : 'password')
            }}
          >
            {inputType === 'password' ? <GrFormView /> : <GrFormViewHide />}
          </button>
        )}
        {value && (
          <button
            className={`p-2 self-center ${
              type === 'password' ? 'right-8' : 'right-2'
            } absolute text-2xl`}
            type="button"
            onClick={(e) => {
              e.preventDefault()

              const resetValue = {
                target: { value: '' },
              }

              onChange && onChange(resetValue)
            }}
          >
            <IoIosClose />
          </button>
        )}
      </div>
      {type === 'email' && inputColor === 'red' && (
        <p className="text-red-500 text-sm mt-1">
          Please enter a valid email address
        </p>
      )}
    </div>
  )
}
