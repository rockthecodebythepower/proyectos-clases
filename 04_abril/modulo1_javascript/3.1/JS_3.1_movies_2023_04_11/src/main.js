import '../style.css'

import { router } from './utils/spa'

window.addEventListener('click', (e) => {
  if (e.target.matches('[data-link]')) {
    e.preventDefault()
    history.pushState(null, null, e.target.href)
    router()
  }
})

window.addEventListener('popstate', router)
window.addEventListener('DOMContentLoaded', router)