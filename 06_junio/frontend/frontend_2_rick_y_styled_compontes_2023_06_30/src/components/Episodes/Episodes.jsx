import React from 'react'
import { EpisodesWrp } from './Episodes.styles'
import Episode from '../Episode/Episode'

const Episodes = ({ data }) => {
  return (
    <EpisodesWrp>
      {data && data.map((episode) => <Episode key={episode.id} episode={episode}/>)}
    </EpisodesWrp>
  )
}

export default Episodes