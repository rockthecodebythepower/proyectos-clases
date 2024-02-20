import "./Link.css"

const Link = ({ to, children, cN, ...rest }) => {

    // prevenir la recarga

  return (
    <a href={to} className={cN}>{children}</a>
  )
}

export default Link