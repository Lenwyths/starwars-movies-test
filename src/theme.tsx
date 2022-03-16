import type { Theme } from 'theme-ui'

export const theme: Theme = {
  breakpoints: ['40em', '52em', '64em'],
  fonts: {
    'movie-title': '"News Cycle", sans-serif',
    heading: 'sans-serif',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  space: [8, 12, 16, 20, 24, 32, 48],
  sizes: {
    'page-container': 1200,
  },
  radii: {
    base: 6,
    extra: 12,
    circle: 9999,
  },
  zIndices: {
    defualt: 0,
    menu: 1,
  },
  colors: {
    'background': 'hsl(216, 13%, 18%)',
    'film-background': 'hsl(216, 13%, 15%)',
    'film-background--hover': 'hsl(216, 13%, 21%)',
    'film-details-header-title': 'hsl(54, 100%, 56%, .85)',
    'film-details-header-background': 'hsl(0, 0%, 0%)',
    'menu-divider': 'hsl(0, 0%, 100%, .25)',
    'primary': 'hsl(17, 77%, 40%)',
    'text': 'hsl(0, 0%, 100%)',
    modes: {
      jedi: {
        'background': 'hsl(216, 13%, 100%)',
        'film-background': 'hsl(216, 13%, 90%)',
        'film-background--hover': 'hsl(216, 13%, 83%)',
        'menu-divider': 'hsl(0, 0%, 0%, .25)',
        'primary': 'hsl(193, 83%, 55%)',
        'text': 'hsl(0, 0%, 0%)',
      },
    },
  },
  images: {
    character: {
      width: 100,
      height: 100,
    }
  },
  forms: {
    switch: {
      backgroundColor: 'primary',
    },
  },
  styles: {
    // Renders the styles on the html dom-node
    root: {
      a: {
        textDecoration: 'none',
        color: 'inherit',
        outline: 'none',
      },
      body: {
        WebkitFontSmoothing: 'antialiased',
        fontFamily: 'body',
        fontSize: 2,
        margin: '0px',
        minHeight: '100vh',
      },
    },
  }
}
