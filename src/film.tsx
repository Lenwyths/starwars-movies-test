import * as ReactRouter from 'react-router-dom'
import * as ThemeUi from 'theme-ui'
import { useFragment, graphql } from 'react-relay'

const dateDisplayOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
}

export function Film(props) {
  const data = useFragment(
    graphql`
      fragment film_film on Film {
        id
        title
        director
        openingCrawl
        releaseDate
      }
    `,
    props.film
  )

  return (
    <ThemeUi.Box
      as={ReactRouter.Link} 
      to={`/films/${data.id}`} 
      sx={{
        p: 5,
        backgroundColor: 'film-background',
        borderRadius: 'base',
        transition: 'transform 125ms ease-in-out',
        '&:hover, &:active, &:focus': {
          backgroundColor: 'film-background--hover',
        },
        '&:active': {
          transform: 'scale(0.95)',
        }
      }}
    >
      <article>
        <ThemeUi.Box
          as="header"
          sx={{
            textAlign: 'left',
            display: 'flex',
            justifyContent: 'space-between',
            mb: [3, 5],
          }}
        >
          <ThemeUi.Box
            as="h2"
            sx={{
              fontSize: 5,
              mr: 2,
            }}
          >
            {data?.title}
          </ThemeUi.Box>
          <ThemeUi.Box sx={{ minWidth: 'max-content' }}>
            {data?.releaseDate && new Date(data.releaseDate).toLocaleDateString('en-US', dateDisplayOptions)}
          </ThemeUi.Box>
        </ThemeUi.Box>
        <ThemeUi.Box
          sx={{
            display: 'grid',
            gridTemplateColumns: ['inital', 'max-content 1fr'],
            gridGap: [0, 5],
            textAlign: 'left',
          }}
        >
          <ThemeUi.Box sx={{ fontWeight: 'bold' }}>director</ThemeUi.Box>
          <ThemeUi.Box sx={{ fontSize: 4, mb: [2, '0px'] }}>{data?.director}</ThemeUi.Box>

          <ThemeUi.Box sx={{ fontWeight: 'bold' }}>openingCrawl</ThemeUi.Box>
          <ThemeUi.Box
            sx={{
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: '2',
              WebkitBoxOrient: 'vertical',
            }}
          >
            {data?.openingCrawl}
          </ThemeUi.Box>
        </ThemeUi.Box>
      </article>
    </ThemeUi.Box>
  )
}

export default Film
