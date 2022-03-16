import * as React from 'react'
import * as ThemeUi from 'theme-ui'

export function ModeSwitcher() {
  const [colorMode, setColorMode] = ThemeUi.useColorMode()

  React.useEffect(() => {
    if (window.matchMedia) {
      const isASith = window.matchMedia('(prefers-color-scheme: dark)').matches
      // Only a Sith deals in absolutes...
      setColorMode(isASith ? 'sith' : 'jedi')
    } else {
      setColorMode('sith')
    }
  }, [])

  function handleChange(event) {
    setColorMode(event.target.checked ? 'jedi' : 'sith')
  }

  return (
    <ThemeUi.Box sx={{ textTransform: 'capitalize' }}>
      <ThemeUi.Switch label={colorMode} onChange={handleChange} />
    </ThemeUi.Box>
  )
}
