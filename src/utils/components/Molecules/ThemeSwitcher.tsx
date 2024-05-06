/**
 * Author: CI5KO
 * Creation Date: April 14, 2024
 * Last Modification: May 05, 2024
 *
 * Contact: hector_oliva16k@hotmail.com
 *
 * This code is owned by CI5KO.
 * You are welcome to contribute to the original repository.
 *
 * Any contributions to this repository are subject to the original terms stated herein.
 */

import { Switch } from '..'

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
