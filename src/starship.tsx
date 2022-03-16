import * as R from 'ramda'
import * as React from 'react'
import * as ReactRouter from 'react-router-dom'
import * as ThemeUi from 'theme-ui'
import PropTypes from 'prop-types'
import { useLazyLoadQuery, graphql } from 'react-relay'

import { CategoryPills } from './category-pills'

export function Starship() {
  const { id } = ReactRouter.useParams()
  const { starship } = useLazyLoadQuery(
    graphql`
      query starshipQuery($id: ID!) {
        starship(id: $id) {
          id
          name
          model
          starshipClass
          manufacturers
          costInCredits
          length
          crew
          passengers
          maxAtmospheringSpeed
          MGLT
          hyperdriveRating
          cargoCapacity
          consumables
          pilotConnection {
            pilots {
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
      'model',
      'starshipClass',
      'manufacturers',
      'costInCredits',
      'length',
      'crew',
      'passengers',
      'maxAtmospheringSpeed',
      'MGLT',
      'hyperdriveRating',
      'cargoCapacity',
      'consumables',
    ],
    starship
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
            backgroundImage: 'url(https://source.unsplash.com/collection/11270531/250x560)',
            backgroundSize: 'cover',
          }}
        >
          {starship.name}
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
                {R.equals(key, 'manufacturers') ? R.map(i => `${i}, `, details[key]) : details[key]}
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
          title="Piloted by"
          category="characters"
          items={starship?.pilotConnection?.pilots}
        />

        <CategoryPills
          title="Seen in these movies"
          category="films"
          items={starship?.filmConnection?.films}
        />
      </ThemeUi.Box>
    </ThemeUi.Box>
  )
}

export default Starship
