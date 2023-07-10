import "./Rate.css";

export const getRate = (puntuacion) => {
  let imgs = ``;

  for (let i = 0; i < puntuacion; i++) {
    imgs += `<img src="/estrella.png" class="star"/>`;
  }

  return imgs;
};
