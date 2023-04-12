import './style.css'

export const Image = (src, alt, style) => `
  <img class="image ${style}" src="${src}" alt="${alt}"/>
`