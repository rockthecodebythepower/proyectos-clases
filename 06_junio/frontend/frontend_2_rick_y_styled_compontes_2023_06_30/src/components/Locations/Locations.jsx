import React from 'react'
import { LocationsWrp } from './Locations.styles'
import Location from '../Location/Location'

const Locations = ({ data }) => {
  return (
    <LocationsWrp>
      {data && data.map((location) => <Location location={location} key={location.id}/>)}
    </LocationsWrp>
  )
}

export default Locations