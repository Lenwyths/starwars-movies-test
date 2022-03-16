import * as React from 'react'
import * as ReactRouter from 'react-router-dom'

const Home = React.lazy(() => import('./home'))
const Character = React.lazy(() => import('./character'))
const FilmDetails = React.lazy(() => import('./film-details'))
const NotFound = React.lazy(() => import('./not-found'))
const Planet = React.lazy(() => import('./planet'))
const Vehicle = React.lazy(() => import('./vehicle'))
const Starship = React.lazy(() => import('./starship'))
const Species = React.lazy(() => import('./species'))

export function Routes() {
  return (
    <ReactRouter.Routes>
      <ReactRouter.Route path="/" element={<Home />}/>
      <ReactRouter.Route path="/films/:id" element={<FilmDetails />}/>
      <ReactRouter.Route path="/characters/:id" element={<Character />}/>
      <ReactRouter.Route path="/planets/:id" element={<Planet />}/>
      <ReactRouter.Route path="/vehicles/:id" element={<Vehicle />}/>
      <ReactRouter.Route path="/species/:id" element={<Species />}/>
      <ReactRouter.Route path="/starships/:id" element={<Starship />}/>
      <ReactRouter.Route path="*" element={<NotFound />}/>
    </ReactRouter.Routes>
  )
}

export default Routes
