import './style.css'

export const Cta = (text, url, style) => `
  <a class="cta ${style}" href="${url}">${text}</a>
`