import * as React from 'react'
import * as ReactRouter from 'react-router-dom'
import * as ThemeUi from 'theme-ui'
import PropTypes from 'prop-types'

export function CategoryPills(props) {
  if (!props.items?.length) {
    return null
  }

  return (
    <ThemeUi.Box>
      <ThemeUi.Heading
        as="h2"
        sx={{ fontSize: 3, }}
      >
        {props.title}
      </ThemeUi.Heading>
      <ThemeUi.Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: [0, 1],
          mt: 1,
          fontWeight: 'bold',
          fontSize: 2,
        }}
      >
        {props.items?.map(item => (
          (item.name || item.title) && (
            <ThemeUi.Box
              key={item.id}
              as={ReactRouter.Link}
              to={`/${props.category}/${item.id}`}
              sx={{
                px: 2,
                py: 0,
                backgroundColor: 'film-background',
                borderRadius: 'circle',
                fontSize: 0,
                '&:hover': {
                  backgroundColor: 'film-background--hover',
                },
              }}
            >
              {item.name || item.title}
            </ThemeUi.Box>
          )
        ))}
      </ThemeUi.Box>
    </ThemeUi.Box>
  )
}

CategoryPills.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
}

export default CategoryPills