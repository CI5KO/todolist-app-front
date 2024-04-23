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

import { useRef, useState } from 'react'

import { GrFormView, GrFormViewHide } from 'react-icons/gr'
import { IoIosClose } from 'react-icons/io'

interface inputProps {
  title?: string
  type?: string
  step?: string
  disabled?: boolean
  value?: string | number
  onChange?: (e?: any) => void
  onBlur?: (e?: any) => void
}

export function validateEmailInput(email: string): boolean {
  const RegExp: RegExp =
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
}: inputProps): JSX.Element {
  const [inputColor, setInputColor] = useState<string>('blue')
  const [inputType, setInputType] = useState<string>(type)
  const [focus, setFocus] = useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div className="relative" onClick={() => inputRef.current?.focus()}>
      <label
        className={`absolute ${
          value || focus ? '-top-3 left-2' : 'top-2.5 left-3 cursor-text'
        } bg-gradient-to-t from-white via-white dark:from-black dark:via-black via-50% to-50% transition-all duration-100 z-[5] font-semibold px-1 select-none`}
      >
        {title}
      </label>
      <div className="flex items-center relative">
        <input
          className={`border-2 border-${inputColor}-500 w-full rounded-lg px-4 py-2 shadow-md transition duration-75`}
          type={inputType}
          min={1}
          step={step}
          disabled={disabled}
          ref={inputRef}
          onBlur={(e) => {
            onBlur && onBlur(e)
            setFocus(false)
          }}
          onFocus={() => setFocus(true)}
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
        <p className="text-danger text-sm mt-1">
          Please enter a valid email address
        </p>
      )}
    </div>
  )
}
