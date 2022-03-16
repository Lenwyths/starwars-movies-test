import * as React from 'react'
import * as ThemeUi from 'theme-ui'
import { graphql, useLazyLoadQuery } from 'react-relay'

import { Film } from './film'

export function Home() {
  const data = useLazyLoadQuery(
    graphql`
      query homeQuery {
        allFilms {
          edges {
            node {
              id
              ...film_film
            }
          }
        }
      }
    `,
    {}
  )

  const films = (data.allFilms?.edges ?? [])
    .map((edge) => edge?.node)
    .filter(Boolean)

  return (
    <ThemeUi.Box
      sx={{
        display: 'grid',
        gridGap: [1, 4],
        gridTemplateColumns: ['initial', 'repeat(auto-fit, minmax(540px, 1fr))'],
        alignContent: 'start',
      }}
    >
      {films.map((film) => (
        <Film key={film?.id} film={film ?? null} />
      ))}
    </ThemeUi.Box>
  )
}

export default Home
