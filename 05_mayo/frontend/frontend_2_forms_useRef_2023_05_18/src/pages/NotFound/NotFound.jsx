import { Link } from "react-router-dom"
import "./NotFound.css"
import ButtonTroll from "buttontroll"

const NotFound = () => {
  return (
    <div className="notFound">
        <h1>404 NOT FOUND</h1>
        <Link to="/">Click here to go home</Link>
        <ButtonTroll text="CONSIGUE 1M €"></ButtonTroll>
    </div>
  )
}

export default NotFound