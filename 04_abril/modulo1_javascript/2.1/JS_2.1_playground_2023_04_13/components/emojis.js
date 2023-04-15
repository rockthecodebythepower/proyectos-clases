import "./emojis.css";

const emojis = [
  {
    value: "😀",
    type: "face",
  },
  {
    value: "😍",
    type: "face",
  },
  {
    value: "🥸",
    type: "face",
  },
  {
    value: "😵‍💫",
    type: "face",
  },
  {
    value: "🐶",
    type: "animal",
  },
  {
    value: "🦊",
    type: "animal",
  },
  {
    value: "🐵",
    type: "animal",
  },
  {
    value: "🐸",
    type: "animal",
  },
  {
    value: "🍉",
    type: "food",
  },
  {
    value: "🥐",
    type: "food",
  },
  {
    value: "🍕",
    type: "food",
  },
  {
    value: "🌮",
    type: "food",
  },
  {
    value: "💻",
    type: "thing",
  },
  {
    value: "🧯",
    type: "thing",
  },
  {
    value: "🔭",
    type: "thing",
  },
  {
    value: "🔑",
    type: "thing",
  },
];

const shuffle = (list) => {
  const compareRandom = (a, b) => {
    return Math.random() - 0.5;
  };
  return list.sort(compareRandom);
};

const randomEmojis = shuffle(emojis);

const template = () => {
  return `
    <h2>Emojis</h2>
    <article class="emojis">
    ${randomEmojis.map((emoji) => `<p>${emoji.value}</p>`).join("")}
    </article>
    <div id="emojisBtn">
    <button id="">All</button>
    <button id="face">Faces</button>
    <button id="animal">Animals</button>
    <button id="food">Food</button>
    <button id="thing">Things</button>
    </div>
    `;
};

const filter = (keyword) => {
  console.log(keyword);
  const filteredEmojis = randomEmojis.filter((emoji) =>
    emoji.type.includes(keyword)
  );
  document.querySelector(".emojis").innerHTML = filteredEmojis
    .map((emoji) => `<p>${emoji.value}</p>`)
    .join("");
};

const listeners = () => {
  const allBtns = document.querySelectorAll("#emojisBtn > button");

  allBtns.forEach(
    (btn) =>
      (btn.onclick = () => {
        filter(btn.id);
      })
  );
};

export const printTemplate = () => {
  document.querySelector("#emojis").innerHTML = template();
  listeners();
};
