import "./search.css"

const users = [
  {
    name: "Brent Lehner Jr.",
    job: "International Data Strategist",
    id: "1",
  },
  {
    name: "Ms. Darnell Stokes I",
    job: "Lead Tactics Manager",
    id: "2",
  },
  {
    name: "Dale Torp",
    job: "Legacy Quality Supervisor",
    id: "3",
  },
  {
    name: "Marguerite Stokes",
    job: "Product Implementation Agent",
    id: "4",
  },
  {
    name: "Julia Gusikowski",
    job: "Customer Accounts Associate",
    id: "5",
  },
  {
    name: "Javier Bauch DVM",
    job: "Customer Integration Architect",
    id: "6",
  },
  {
    name: "Alejandro Nicolas PhD",
    job: "Regional Operations Liaison",
    id: "7",
  },
  {
    name: "Ramona Kovacek",
    job: "Legacy Quality Strategist",
    id: "8",
  },
  {
    name: "Melba Jacobson PhD",
    job: "Principal Infrastructure Specialist",
    id: "9",
  },
  {
    name: "Arturo Beahan",
    job: "Product Response Coordinator",
    id: "10",
  },
]

const template = () => {
  return `
    <h2>Search filter</h2>
    <input type="text" id="searchInput" placeholder="Search by nome or job position..."/>
    <article id="filterarticle">
    ${users
      .map(
        (user) => `
    <div>
        <h3>${user.name}</h3>
        <h4>${user.job}</h4>
    </div>
    `
      )
      .join("")}
    </article>
    `
}

const listeners = () => {
  const searchInput = document.querySelector("#searchInput")
  searchInput.addEventListener("input", (ev) => {
    const filteredUsers = users.filter(
      (user) =>
        user.name.toLowerCase().includes(ev.target.value.toLowerCase()) ||
        user.job.toLowerCase().includes(ev.target.value.toLowerCase())
    )
    document.querySelector("#filterarticle").innerHTML = filteredUsers
      .map(
        (user) => `
    <div>
        <h3>${user.name}</h3>
        <h4>${user.job}</h4>
    </div>
    `
      )
      .join("")
  })
}

export const printTemplate = () => {
  document.querySelector("#search").innerHTML = template()
  listeners()
}
