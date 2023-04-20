const DateFormat = ({iso}) => {
  const date = new Date(iso)
  const formattedDate = date.toLocaleDateString("es-ES", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })
  return (
    <div className="date">
      <span className="material-symbols-outlined">event</span>
      <h4 data-testid="dateheading">{formattedDate}</h4>
    </div>
  )
}

export default DateFormat
