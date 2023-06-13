import "./Agent.css";

export const pintarAgente = (agente) => {
  return `
    <div class="agent" style="background: linear-gradient(to right, 
        #${agente.backgroundGradientColors[0]} 0%, 
        #${agente.backgroundGradientColors[3]} 100%)">

        <h3>${agente.displayName}</h3>
        <div>
            <img src="${agente.fullPortrait}"/>
        </div>
        <p>${agente.role?.displayName}</p>
    </div>
    `;
};