import "./Stars.css"

export const Stars = (num) => {
  const max = 10
  const round = Math.round(num)
  const stars = Math.min(round, max)
  const template = "★".repeat(stars)
  return `<span>${template}</span>`
}
