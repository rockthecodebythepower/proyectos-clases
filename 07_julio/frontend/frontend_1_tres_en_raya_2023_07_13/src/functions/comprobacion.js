export const comprobacion = (juego, dato) => {

  if (
    (juego[0][0] === dato && juego[0][1] === dato && juego[0][2] === dato) ||
    (juego[1][0] === dato && juego[1][1] === dato && juego[1][2] === dato) ||
    (juego[2][0] === dato && juego[2][1] === dato && juego[2][2] === dato) ||
    (juego[0][0] === dato && juego[1][0] === dato && juego[2][0] === dato) ||
    (juego[0][1] === dato && juego[1][1] === dato && juego[2][1] === dato) ||
    (juego[0][2] === dato && juego[1][2] === dato && juego[2][2] === dato) ||
    (juego[0][0] === dato && juego[1][1] === dato && juego[2][2] === dato) ||
    (juego[0][2] === dato && juego[1][1] === dato && juego[2][0] === dato)
  ) {
    return true;
  } else {
    return false;
  }
};
