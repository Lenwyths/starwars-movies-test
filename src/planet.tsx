import * as R from 'ramda'
import * as React from 'react'
import * as ReactRouter from 'react-router-dom'
import * as ThemeUi from 'theme-ui'
import PropTypes from 'prop-types'
import { useLazyLoadQuery, graphql } from 'react-relay'

import { CategoryPills } from './category-pills'

export function Planet() {
  const { id } = ReactRouter.useParams()
  const { planet } = useLazyLoadQuery(
    graphql`
      query planetQuery($id: ID!) {
        planet(id: $id) {
          id
          name
          diameter
          rotationPeriod
          orbitalPeriod
          gravity
          population
          climates
          terrains
          surfaceWater
          residentConnection {
            residents {
              id
              name
            }
          }
          filmConnection {
            films {
              id
              title
            }
          }
        }
      }
    `,
    { id }
  )

  const details = R.filter(i => !R.isNil(i), R.pick(
    [
      'diameter',
      'rotatioPeriod',
      'orbitalPeriod',
      'gravity',
      'population',
      'climates',
      'terrains',
      'surfaceWater',
    ],
    planet
  ))

  return (
    <ThemeUi.Box>
      <ThemeUi.Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 4,
          borderRadius: 'base',
          backgroundColor: 'film-background',
        }}
      >
        <ThemeUi.Box
          sx={{
            backgroundColor: 'black',
            borderRadius: 'base',
            aspectRatio: '1/1',
            width: '250px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'end',
            padding: 4,
            fontSize: 4,
            fontWeight: 'bold',
            backgroundImage: 'url(https://source.unsplash.com/collection/2250830/250x250)'
          }}
        >
          {planet.name}
        </ThemeUi.Box>
        <ThemeUi.Box
          as="dl"
          sx={{
            display: 'grid',
            gridGap: 1,
            p: [1, 4],
            flexGrow: 1,
          }}
        >
          {R.map((key) => (
            <ThemeUi.Flex
              sx={{
                gap: 1,
              }}
              key={key}
            >
              <ThemeUi.Box as="dt" sx={{fontWeight: 'bold'}}>
                {key}:
              </ThemeUi.Box>
              <ThemeUi.Box as="dd">
                {details[key]}
              </ThemeUi.Box>
            </ThemeUi.Flex>
          ), R.keys(details))}
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
          title="These people live here:"
          category="characters"
          items={planet?.residentConnection?.residents}
        />

        <CategoryPills
          title="Seen in these movies"
          category="films"
          items={planet?.filmConnection?.films}
        />
      </ThemeUi.Box>
    </ThemeUi.Box>
  )
}

export default Planet
