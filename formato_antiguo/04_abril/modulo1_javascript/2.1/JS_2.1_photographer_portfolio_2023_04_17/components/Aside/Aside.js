import "./Aside.css"
import {template as DataSection} from "./DataSection"
import {template as StatsSection} from "./StatsSection"
import {template as AboutMeSection} from "./AboutMeSection"
import {template as ContactSection} from "./ContactSection"

const template = () => {
  return `
  ${DataSection()}
  ${StatsSection()}
  ${AboutMeSection()}
  ${ContactSection()}
    `
}

export const printTemplate = () => {
  document.querySelector("aside").innerHTML = template()
}
