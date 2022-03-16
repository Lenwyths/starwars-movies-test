import * as R from 'ramda'
import * as React from 'react'
import * as ReactRouter from 'react-router-dom'
import * as ThemeUi from 'theme-ui'
import PropTypes from 'prop-types'
import { useLazyLoadQuery, graphql } from 'react-relay'

import { CategoryPills } from './category-pills'

export function Species() {
  const { id } = ReactRouter.useParams()
  const { species } = useLazyLoadQuery(
    graphql`
      query speciesQuery($id: ID!) {
        species(id: $id) {
          id
          name
          classification
          designation
          averageHeight
          averageLifespan
          eyeColors
          hairColors
          skinColors
          language
          homeworld {
            name
          }
          personConnection {
            people {
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
    'classification',
    'designation',
    'averageHeight',
    'averageLifespan',
    'eyeColors',
    'hairColors',
    'skinColors',
    'language',
    'homeworld',
    ],
    species
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
            backgroundImage: 'url(https://source.unsplash.com/collection/277887/250x315)'
          }}
        >
          {species?.name}
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
                {R.is(Array, species[key]) ? R.map(i => `${i}, `, species[key]) : R.pathOr(species[key], [key, 'name'], species)}
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
          title="People of this species"
          category="characters"
          items={species?.personConnection?.people}
        />

        <CategoryPills
          title="Been a part of these movies"
          category="films"
          items={species?.filmConnection?.films}
        />
      </ThemeUi.Box>
    </ThemeUi.Box>
  )
}

export default Species
