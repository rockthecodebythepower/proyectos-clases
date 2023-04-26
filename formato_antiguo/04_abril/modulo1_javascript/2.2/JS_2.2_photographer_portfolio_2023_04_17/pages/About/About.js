import "./About.css"

const template = () => {
  return `
    <section class="about">
    <p>
    In my early 20s, if you ask me what I want to do or what's my plan, I would tell you I don't know. And that's the truth. I'd never thought I can be good at anything, let alone turn a passion into a profession.
    </p>
    <p>
    My love for creating beautiful <strong>images</strong> has taken me to places, meeting the kindest and friendliest people, listening to their stories, sharing their emotions, and learning about their life and culture. I'd captured those very rare moments of pure love, strength, and joy, or sometimes sadness, anger, and frustration. I laugh with them and cry with them. Unforgettable real-life moments that I get to document for my clients, or more selfishly, for me. These experiences are mine to keep and tell whenever there's an opportunity to share.
    </p>
    <p>
    Peter <strong>#shootingforthestar</strong>
    </p>
    </section>
    `
}

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template()
}
