import SectionTitle from "../SectionTitle/SectionTitle"
import "./Section.css"

const Section = ({ id, titulo, children }) => {
  return (
    <section className="section" id={id}>
        <SectionTitle>{titulo}</SectionTitle>
        {children}
    </section>
  )
}

export default Section