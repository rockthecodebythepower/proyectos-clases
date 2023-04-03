import "./Hero.css"

const template = () => {
  return `
    <article class="description">
        <h2>Improve your customer experience with real-time assistance</h2>
        <p>Our live chat software helps you connect with your customers
        instantly, boosting sales and improving customer satisfaction. Try
        it out today and see the difference it can make for your business.</p>
        <div>
            <button>Get Started</button>
            <button class="btn-variant">
            <img src="/images/rightArrow.svg" alt="Right Arrow Icon" />
            See in Action</button>
        </div>
    </article>

    <article class="preview">
    <img src="/images/chat.svg" alt="ChatFlow Preview"/>
    </article>
    `
}

export const printTemplate = () => {
  document.querySelector("#hero").innerHTML = template()
}
