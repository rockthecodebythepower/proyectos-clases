import Graph from "../Graph/Graph";
import "./Vision.css";

const graphs = [
    {
        icon: "./assets/graph.png",
        text: "Worl lider in consulting and finance"
    },
    {
        icon: "./assets/graph2.png",
        text: "A focused team with a specialized skillset"
    },
    {
        icon: "./assets/puzzle.png",
        text: "Trusted and professional advisors for you"
    },
    {
        icon: "./assets/graph3.png",
        text: "Experience to give you a better results"
    }
]

const Vision = () => {
  return (
    <section id="vision">
        <div class="info">
            <p class="slogan">OUR FEATURE</p>
            <h3>Vision to Grow Better</h3>
            <p>Lorem ipsum dolor sit amet. consectetur adipiscing elit, sed do elusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendiesse ultrices gravida.</p>
        </div>
        <div id="graphs">
            {graphs.map((graph) => <Graph img={graph.icon} text={graph.text}/>)}
        </div>
    </section>
  )
}

export default Vision