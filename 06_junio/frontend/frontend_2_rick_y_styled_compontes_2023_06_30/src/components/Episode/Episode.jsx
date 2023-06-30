import React from 'react'
import { EpisodeAirDate, EpisodeName, EpisodeWrp } from './Episode.styles'

const Episode = ({ episode }) => {
  return (
    <EpisodeWrp $imagen={"https://i.pinimg.com/474x/91/f1/97/91f19750b8eaca1fea8f25c0316e33b7.jpg"}>
      <EpisodeName>{episode.name}</EpisodeName>
      <EpisodeAirDate as="p">{episode.air_date}</EpisodeAirDate>
    </EpisodeWrp>
  )
}

export default Episode