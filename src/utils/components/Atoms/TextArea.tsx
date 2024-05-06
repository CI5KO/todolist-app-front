'use client'

/**
 * Author: CI5KO
 * Creation Date: May 05, 2024
 * Last Modification: May 05, 2024
 *
 * Contact: hector_oliva16k@hotmail.com
 *
 * This code is owned by CI5KO.
 * You are welcome to contribute to the original repository.
 *
 * Any contributions to this repository are subject to the original terms stated herein.
 */

import { useState, useEffect, useRef } from 'react'
import { IoIosClose } from 'react-icons/io'

interface TextAreaProps {
  title: string
  value?: string
  onChange?: (value: string) => void
}

export default function TextArea({ title, value, onChange }: TextAreaProps) {
  const [focus, setFocus] = useState<boolean>(false)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const adjustHeight = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto'
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px'
    }
  }

  useEffect(() => {
    adjustHeight()
  }, [value])

  return (
    <div className="relative">
      <label
        className={`absolute ${
          value !== '' || focus ? '-top-3 left-2' : 'top-2.5 left-3 cursor-text'
        } bg-gradient-to-t from-white via-white dark:from-black dark:via-black via-60% to-60% transition-all duration-100 z-[5] font-semibold px-1 select-none`}
      >
        {title}
      </label>
      <textarea
        ref={textAreaRef}
        value={value}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => {
          const { value } = e.target
          onChange?.(value)
          adjustHeight()
        }}
        className="resize-none w-full rounded-lg px-4 py-2 shadow-md transition duration-75 z-0 overflow-hidden"
      />
      {value !== '' && (
        <button
          className={`p-2 self-center absolute text-2xl right-2`}
          type="button"
          onClick={(e) => {
            e.preventDefault()
            onChange?.('')
          }}
        >
          <IoIosClose />
        </button>
      )}
    </div>
  )
}
