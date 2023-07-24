import "./Graph.css"

const Graph = ({ img, text }) => {
  return (
    <div className="graph">
        <img src={img}/>
        <p>{text}</p>
    </div>
  )
}

export default Graph