import * as React from 'react'
import * as ReactRouter from 'react-router-dom'
import * as ThemeUi from 'theme-ui'
import { Routes } from './routes'
import { Menu } from './menu'
import { PageSpinner } from './page-spinner'

export function App() {
  return (
    <>
      <Menu />
      
      <React.Suspense fallback={<PageSpinner />}>
        <ThemeUi.Box
          sx={{
            p: [1, 4],
            maxWidth: 'page-container',
            mx: 'auto',
          }}
        >
          <Routes />
        </ThemeUi.Box>
      </React.Suspense>
    </>
  )
}

export default App
