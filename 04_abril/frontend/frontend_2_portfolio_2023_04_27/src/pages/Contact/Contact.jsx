import "./Contact.css"
import Social from "../../components/Social/Social"
const Contact = () => {
  return (
    <main className="contact">
      <Social link="http://twitter.com" logo="/twitter.png" />
      <Social link="http://instagram.com" logo="/instagram.png" />
      <Social link="http://facebook.com" logo="/facebook.png" />
      <Social link="http://linkedin.com" logo="/linkedin.png" />
    </main>
  )
}

export default Contact
