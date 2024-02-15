import "./Character.css";

export const Character = (character) => {
  const { name, image } = character;

  return `
    <div class="character">
        <div class="img-wrp">
            <div class="name">
                <h3>${name}</h3>
            </div>
            <img src="${image}"/>
        </div>
    </div>
    `;
};
