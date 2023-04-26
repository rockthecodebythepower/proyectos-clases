export const linkPage = (id, page) => {
  const links = document.querySelectorAll(id)
  for (const link of links) {
    link.addEventListener("click", () => {
      page()
      document
        .querySelector("#mobileanchors")
        .classList.toggle("showmobilelinks")
    })
  }
}
