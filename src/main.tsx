import * as React from 'react'
import * as ReactRelay from 'react-relay'
import * as ReactRouter from 'react-router-dom'
import * as ThemeUi from 'theme-ui'
import ReactDOM from 'react-dom'

import { App } from './app'
import { PageSpinner } from './page-spinner'
import { theme } from './theme'
import { createRelayEnvironment } from "./relay-environment"

const SWAPI_URL = "https://swapi-graphql.netlify.app/.netlify/functions/index"

const relayEnvironment = createRelayEnvironment({
  url: SWAPI_URL,
})

ReactDOM.render(
  <React.StrictMode>
    <ReactRelay.RelayEnvironmentProvider environment={relayEnvironment}>
      <ThemeUi.ThemeProvider theme={theme}>
        <ReactRouter.BrowserRouter>
          <React.Suspense fallback={<PageSpinner />}>
            <App />
          </React.Suspense>
        </ReactRouter.BrowserRouter>
      </ThemeUi.ThemeProvider>
    </ReactRelay.RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
