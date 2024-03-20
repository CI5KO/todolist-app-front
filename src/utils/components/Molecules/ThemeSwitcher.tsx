import Switch from '../Atoms/Switch'

import { useTheme } from 'next-themes'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

export default function ThemeSwitcher(): JSX.Element {
  const { resolvedTheme, setTheme } = useTheme()

  const onChange = (isChecked: boolean) => {
    const theme = isChecked ? 'dark' : 'light'
    setTheme(theme)
  }

  return (
    <Switch
      checked={resolvedTheme === 'dark'}
      onChange={onChange}
      OnIcon={MdDarkMode}
      OffIcon={MdLightMode}
    />
  )
}
