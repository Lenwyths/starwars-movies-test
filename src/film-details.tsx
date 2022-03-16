import * as React from 'react'
import * as ReactRouter from 'react-router-dom'
import * as ThemeUi from 'theme-ui'
import PropTypes from 'prop-types'
import { useLazyLoadQuery, graphql } from 'react-relay'

import { CategoryPills } from './category-pills'

export function FilmDetails() {
  const { id } = ReactRouter.useParams()

  const { film } = useLazyLoadQuery(
    graphql`
      query filmDetailsQuery($id: ID!) {
        film(id: $id) {
          id
          title
          director
          releaseDate
          characterConnection {
            characters {
              id
              name
            }
          }
          planetConnection {
            planets {
              id
              name
            }
          }
          vehicleConnection {
            vehicles {
              id
              name
            }
          }
          speciesConnection {
            species {
              id
              name
            }
          }
          starshipConnection {
            starships {
              id
              name
            }
          }
        }
      }
    `,
    { id }
  )

  return (
    <ThemeUi.Box>
      <ThemeUi.Box
        sx={{
          p: 6,
          backgroundColor: 'film-details-header-background',
          backgroundImage: 'url(/stars-bg.jpeg)',
          color: 'film-details-header-title',
          borderRadius: 'extra',
          overflow: 'hidden',
        }}
      >
        <ThemeUi.Box
          as="h1"
          sx={{
            fontSize: ['42px', '64px', '128px'],
            textAlign: 'center',
            fontFamily: 'movie-title',
            transform: 'perspective(2em) rotateX(25deg) translateY(-15%)',
            lineHeight: '1em',
            maxWidth: [null, '450px', '700px'],
            mx: 'auto',
          }}
        >
          {film.title}
        </ThemeUi.Box>
      </ThemeUi.Box>

      <ThemeUi.Box
        sx={{
          display: 'grid',
          gridGap: [4, 6],
          mt: [4, 6],
        }}
      >
        <CategoryPills
          title="Characters"
          category="characters"
          items={film?.characterConnection?.characters}
        />

        <CategoryPills
          title="Planets"
          category="planets"
          items={film?.planetConnection?.planets}
        />

        <CategoryPills
          title="Vehicles"
          category="vehicles"
          items={film?.vehicleConnection?.vehicles}
        />

        <CategoryPills
          title="Starships"
          category="starships"
          items={film?.starshipConnection?.starships}
        />

        <CategoryPills
          title="Species"
          category="species"
          items={film?.speciesConnection?.species}
        />
      </ThemeUi.Box>
    </ThemeUi.Box>
  )
}

export default FilmDetails
