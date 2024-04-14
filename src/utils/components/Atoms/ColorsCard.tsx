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

import { type ThemeProps } from '@/utils/context/theme.context'

interface ColorsCardProps {
  id?: string
  theme: ThemeProps
  selected?: boolean
  onSelect: (theme: ThemeProps) => void
}

export default function ColorsCard({
  id,
  theme,
  selected = false,
  onSelect,
}: ColorsCardProps): JSX.Element {
  return (
    <section className="grid relative w-full rounded-lg border-2 border-primary">
      <h1 className="text-center text-lg font-semibold pt-2">
        {theme.themeName}
      </h1>
      <input
        type="radio"
        name={id}
        className="absolute top-4 right-4 checked:accent-primary"
        checked={selected}
        onChange={() => {
          onSelect(theme)
        }}
      />
      <div className="grid grid-cols-5 rounded-lg overflow-hidden p-4 w-full h-[100px]">
        <div
          style={{ backgroundColor: theme.primary }}
          className="w-full h-full rounded-l-lg"
        />
        <div
          style={{ backgroundColor: theme.secondary }}
          className="w-full h-full"
        />
        <div style={{ backgroundColor: theme.ok }} className="w-full h-full" />
        <div
          style={{ backgroundColor: theme.warning }}
          className="w-full h-full"
        />
        <div
          style={{ backgroundColor: theme.danger }}
          className="w-full h-full rounded-r-lg"
        />
      </div>
    </section>
  )
}
