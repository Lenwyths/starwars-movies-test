import * as R from 'ramda'
import * as React from 'react'
import * as ReactRouter from 'react-router-dom'
import * as ThemeUi from 'theme-ui'
import PropTypes from 'prop-types'
import { useLazyLoadQuery, graphql } from 'react-relay'

import { CategoryPills } from './category-pills'

export function Character() {
  const { id } = ReactRouter.useParams()
  const { person } = useLazyLoadQuery(
    graphql`
      query characterQuery($id: ID!) {
        person(id: $id) {
          id
          name
          birthYear
          eyeColor
          gender
          hairColor
          height
          mass
          skinColor
          homeworld {
            name
          }
          species {
            name
          }
          vehicleConnection {
            vehicles {
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

  const details = R.filter(i => !R.isNil(i), R.pick(
    [
    'birthYear',
    'eyeColor',
    'gender',
    'hairColor',
    'height',
    'mass',
    'skinColor',
    'homeworld',
    'species',
    ],
    person
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
            backgroundImage: 'url(https://source.unsplash.com/collection/9680435/250x315)'
          }}
        >
          {person?.name}
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
                {R.pathOr(person[key], [key, 'name'], person)}
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
          title="Has driven these vehicles"
          category="vehicles"
          items={person?.vehicleConnection?.vehicles}
        />

        <CategoryPills
          title="Seen in these starships"
          category="starships"
          items={person?.starshipConnection?.starships}
        />

        <CategoryPills
          title="Been a part of these movies"
          category="films"
          items={person?.filmConnection?.films}
        />
      </ThemeUi.Box>
    </ThemeUi.Box>
  )
}

export default Character
