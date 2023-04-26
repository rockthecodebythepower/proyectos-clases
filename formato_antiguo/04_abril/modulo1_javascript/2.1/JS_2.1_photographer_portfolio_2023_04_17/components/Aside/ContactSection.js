import "./ContactSection.css"

export const template = () => {
  return `
    <section class="contact">
    <h3>Contact me</h3>
    <p>
      <span class="material-symbols-outlined"> phone_iphone </span>+123 456
      789
    </p>
    <p>
      <span class="material-symbols-outlined"> mail </span
      >peter@spiderman.com
    </p>
    <ul>
      <li>
        <a href="http://facebook.com"
          ><img src="/images/facebook.png" alt="Facebook logo"
        /></a>
      </li>
      <li>
        <a href="http://twitter.com"
          ><img src="/images/twitter.png" alt="Twitter logo"
        /></a>
      </li>
      <li>
        <a href="http://tiktok.com"
          ><img src="/images/tik-tok.png" alt="TikTok Logo"
        /></a>
      </li>
    </ul>
  </section>
    `
}
