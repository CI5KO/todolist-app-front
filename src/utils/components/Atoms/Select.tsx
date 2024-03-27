'use client'

import clsx from 'clsx'
import { useRef, useState } from 'react'
import useOutsideClick from '../../hooks/useOutsideClick'

import { IoChevronDownOutline } from 'react-icons/io5'

interface SelectProps {
  selected?: Option
  options: Option[]
  onChange: (value: string | number) => void
}

type Option = {
  value: string | number
  label: string
}

export default function Select({ selected, options, onChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    selected || null
  )

  const selectRef = useRef<HTMLDivElement>(null)

  useOutsideClick(selectRef, () => {
    if (isOpen) setIsOpen(false)
  })

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option)
    onChange(option.value)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={selectRef}>
      <div
        className="cursor-pointer border-2 border-blue-500 w-full rounded-lg px-4 py-2 shadow-md transition duration-75 bg-transparent flex flex-row justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? selectedOption.label : 'Select an option'}
        <IoChevronDownOutline
          className={clsx('self-center transition-all duration-100', {
            'rotate-180': isOpen,
            'rotate-0': !isOpen,
          })}
        />
      </div>
      {isOpen && (
        <div className="absolute border-2 border-blue-500 w-full rounded-lg shadow-md">
          {options.map(
            (option, index) =>
              option.value !== selectedOption?.value && (
                <div
                  key={index}
                  className="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer"
                  onClick={() => handleOptionClick(option)}
                >
                  {option.label}
                </div>
              )
          )}
        </div>
      )}
    </div>
  )
}
