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

import { useState } from 'react'
import { IoStar, IoStarOutline } from 'react-icons/io5'

interface RateProps {
  value: number
  onClick: (rate: number) => void
}

export default function Rate({ value, onClick }: RateProps): JSX.Element {
  const [rate, setRate] = useState<number>(value)
  const [hovered, setHovered] = useState<number>(0)

  return (
    <div className="flex items-center justify-center md:justify-start gap-1 text-secondary w-full md:w-auto">
      {[1, 2, 3, 4, 5].map((starValue, index) => (
        <div
          key={index}
          onMouseEnter={() => setHovered(starValue)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => {
            setRate(starValue)
            onClick(starValue)
          }}
          className="text-2xl cursor-pointer"
        >
          {starValue <= (hovered || rate) ? (
            <IoStar className="text-4xl" />
          ) : (
            <IoStarOutline className="text-4xl" />
          )}
        </div>
      ))}
    </div>
  )
}
