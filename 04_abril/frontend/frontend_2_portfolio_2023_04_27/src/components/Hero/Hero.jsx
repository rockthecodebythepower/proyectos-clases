import "./Hero.css"
import Avatar from "../Avatar/Avatar"

const Hero = () => {
  return (
    <section className="hero">
      <h2>Hello</h2>
      <h2>
        My name is <strong>Peter Parker</strong>
      </h2>
      <p>
        An artist turned web-developer from Vancouver, BC. I love working on the
        front-end and making beautiful designs come to life.
      </p>
      <Avatar src="https://ichef.bbci.co.uk/news/976/cpsprodpb/1517B/production/_125559368_alexturner.jpg" />
    </section>
  )
}

export default Hero
