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

import { IconType } from 'react-icons'

interface CardLinkProps {
  Icon: IconType
  text: string
  onClick?: () => void
}

export default function CardLink({
  Icon,
  text,
  onClick,
}: CardLinkProps): JSX.Element {
  return (
    <div
      className="flex flex-row justify-between cursor-pointer w-full rounded-md border border-primary p-4 my-4"
      onClick={onClick}
    >
      {text}
      <div className="self-center">
        <Icon />
      </div>
    </div>
  )
}
