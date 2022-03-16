import * as React from 'react'
import * as ThemeUi from 'theme-ui'

export function NotFound() {
  return (
    <ThemeUi.Box
      sx={{
        display: 'grid',
        placeItems: 'center',
        minHeight: '50vh',
        textAlign: 'center',
      }}
    >
      <ThemeUi.Box>
        <ThemeUi.Heading
          as="h1"
          sx={{
            fontSize: 7,
            mb: 2,
          }}
        >
          404
        </ThemeUi.Heading>
        This is not the page you're looking for..
      </ThemeUi.Box>
    </ThemeUi.Box>
  )
}

export default NotFound
