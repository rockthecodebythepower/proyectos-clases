import "./Timer.css";

const Timer = ({ date }) => {
  return (
    <h2>{date.toLocaleTimeString()}</h2>
  )
}

export default Timer