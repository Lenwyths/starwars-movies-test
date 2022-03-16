import * as React from 'react'
import * as ThemeUi from 'theme-ui'

import * as Icons from './icons'

export function PageSpinner() {
  return (
    <ThemeUi.Box
      sx={{ 
        display: 'grid',
        placeItems: 'center',
        minHeight: '50vh',
        fontSize: '42px',
        color: 'text',
      }}
    >
      <Icons.Spinner />
    </ThemeUi.Box>
  )
}
