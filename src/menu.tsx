import * as React from 'react'
import * as ReactRouter from 'react-router-dom'
import * as ThemeUi from 'theme-ui'

import * as Icons from './icons'
import { ModeSwitcher } from './mode-switcher'

export function Menu() {
  return (
    <ThemeUi.Box
      as="nav"
      sx={{
        backgroundColor: 'background',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid',
        borderColor: 'menu-divider',
        justifyContent: 'space-between',
        position: 'sticky',
        height: ['50px', '75px'],
        top: '0px',
        mx: [1, 4],
        zIndex: 'menu',
      }}
    >
      <ThemeUi.Box
        as={ReactRouter.Link}
        to="/"
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'text',
          fontSize: 5,
          opacity: '0.5',
          transition: 'opacity 150ms ease-out',
          '&:hover, &:active, &:focus': {
            opacity: '1',
          }
        }}
      >
        <Icons.Home />
      </ThemeUi.Box>
      <ModeSwitcher />
    </ThemeUi.Box>
  )
}

export default Menu
