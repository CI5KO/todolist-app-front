import { type ThemeProps } from '@/utils/context/theme.context'

interface ThemeColorsProps {
  id?: string
  theme: ThemeProps
  selected?: boolean
  onSelect: (theme: ThemeProps) => void
}

export default function ThemeColors({
  id,
  theme,
  selected = false,
  onSelect,
}: ThemeColorsProps): JSX.Element {
  return (
    <section className="grid relative w-full rounded-lg border-2 border-primary">
      <h1 className="text-center text-lg font-semibold pt-2">
        {theme.themeName}
      </h1>
      <input
        type="radio"
        name={id}
        className="absolute top-4 right-4"
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
