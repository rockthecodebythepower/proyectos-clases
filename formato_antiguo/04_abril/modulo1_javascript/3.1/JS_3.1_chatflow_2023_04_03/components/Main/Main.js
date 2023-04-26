import "./Main.css"

const template = () => {
  return `
    <h2>   
        Powerful Features to Enhance Your Live Chat Experience
    </h2>
    <p>
        Our live chat product is packed with features to help you connect with
        your customers and provide them with the support they need.
    </p>
    <div class="features-container">
    <article>
    <img src="/images/realtime.svg" alt="Realtime chat icon" />
    <h4>Real-time chat</h4>
    <p>
      Our live chat feature allows users to communicate with website
      visitors in real-time through a chat window. This enables users to
      provide immediate support and assistance to their customers,
      improving their experience on the website.
    </p>
  </article>
  <article>
    <img src="/images/bucket.svg" alt="Bucket icon" />
    <h4>Customization options</h4>
    <p>
      Our live chat product offers a range of customization options to
      allow users to tailor the appearance of the chat window to match
      their website's branding. Users can choose from a variety of color
      schemes and chat bubble designs to create a cohesive look and
      feel.
    </p>
  </article>
  <article>
    <img src="/images/tracking.svg" alt="Crosshair icon" />
    <h4>Visitor tracking</h4>
    <p>
      Our live chat product includes visitor tracking capabilities,
      allowing users to see who is on their website and what pages they
      are viewing. This can help users understand the needs and
      interests of their visitors and provide more targeted support.
    </p>
  </article>
  <article>
    <img src="/images/automated.svg" alt="Stamp icon" />
    <h4>Automated chat responses</h4>
    <p>
      Our live chat product allows users to set up automated responses
      to common questions or queries. This can help users handle
      frequently asked questions more efficiently and free up time to
      focus on more complex or specific issues.
    </p>
  </article>
  <article>
    <img src="/images/mobile.svg" alt="Mobile icon" />
    <h4>Mobile app</h4>
    <p>
      Our live chat product includes a mobile app, allowing users to
      access and manage their live chat service on the go. This makes it
      easy for users to stay connected with their customers and provide
      support no matter where they are.
    </p>
  </article>
  <article>
    <img src="/images/integration.svg" alt="Plug icon" />
    <h4>Integration with other tools</h4>
    <p>
      Our live chat product can be integrated with other tools that
      users may be using, such as a customer relationship management
      (CRM) system. This allows users to manage their customer
      interactions and data from a single platform.
    </p>
  </article>
    </div>
    `
}

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template()
}
