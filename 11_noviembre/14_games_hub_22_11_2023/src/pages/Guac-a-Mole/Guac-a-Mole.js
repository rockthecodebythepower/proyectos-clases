import "./Guac-a-Mole.css";

let COUNT = 0;
let intervalo;
let pausado = true;

export const initMole = () => {
  const divContent = document.querySelector(".content");
  divContent.innerHTML = "";

  const cesta = document.createElement("img");
  const textoContador = document.createElement("h2");
  const jugar = document.createElement("button");
  const pausar = document.createElement("button");
  const audio = document.createElement("audio");
  textoContador.textContent = COUNT;

  audio.src = "./assets/guac-a-mole/pop.mp3";
  textoContador.className = "contador";
  cesta.className = "cesta";
  cesta.src = "./assets/guac-a-mole/cesta.png";
  jugar.textContent = "Jugar";
  pausar.textContent = "Pausar";
  jugar.className = "boton-aguacate";
  pausar.className = "boton-aguacate";

  jugar.addEventListener("click", () => {
    pausado = !pausado;
    toggleButton(jugar, pausar);
    iniciarJuego();
  });

  pausar.addEventListener("click", () => {
    pausado = !pausado;
    toggleButton(jugar, pausar);
    clearInterval(intervalo);
  });

  toggleButton(jugar, pausar);

  divContent.append(audio);
  divContent.append(jugar);
  divContent.append(pausar);
  divContent.append(textoContador);
  divContent.append(cesta);
};

const createPalta = () => {
  const divContent = document.querySelector(".content");

  let randomLeft = Math.random() * (window.innerWidth - 100);
  let randomTop = Math.random() * (window.innerHeight - 200);

  const imgPalta = document.createElement("img");
  imgPalta.className = "palta";
  imgPalta.style.top = `${randomTop + 150}px`;
  imgPalta.style.left = `${randomLeft}px`;
  imgPalta.style.transform = `rotate(${Math.random() * 360}deg)`;
  imgPalta.classList.add("recoger");

  imgPalta.addEventListener("click", (e) => recogerPalta(e));

  imgPalta.src = "./assets/guac-a-mole/palta.png";

  divContent.append(imgPalta);
  comprobar();
};

const recogerPalta = (e) => {
  const audio = document.querySelector("audio");
  audio.volume = 0.5;
  audio.play();
  COUNT++;
  repintarTexto(COUNT);
  e.target.classList.remove("recoger");
  let randomTop = Math.random() * 20 + 80;
  let randomLeft = Math.random() * 20 + 80;
  e.target.style.top = `${window.innerHeight - randomTop}px`;
  e.target.style.left = `${window.innerWidth - randomLeft}px`;
};

const repintarTexto = (cont) => {
  const texto = document.querySelector(".contador");
  texto.textContent = cont;
};

const comprobar = () => {
  const allPaltas = document.querySelectorAll(".recoger");

  if (allPaltas.length > 100) {
    alert("Los aguacates te superan");
    clearInterval(intervalo);
  }
};

const iniciarJuego = () => {
  intervalo = setInterval(() => {
    createPalta();
  }, 1000);

  setTimeout(() => {
    clearInterval(intervalo);
    if (!pausado) {
      intervalo = setInterval(() => {
        createPalta();
      }, 900);
    }
  }, 5000);

  setTimeout(() => {
    clearInterval(intervalo);
    if (!pausado) {
      intervalo = setInterval(() => {
        createPalta();
      }, 800);
    }
  }, 10000);

  setTimeout(() => {
    clearInterval(intervalo);
    if (!pausado) {
      intervalo = setInterval(() => {
        createPalta();
      }, 700);
    }
  }, 15000);

  setTimeout(() => {
    clearInterval(intervalo);
    if (!pausado) {
      intervalo = setInterval(() => {
        createPalta();
      }, 600);
    }
  }, 20000);

  setTimeout(() => {
    clearInterval(intervalo);
    if (!pausado) {
      intervalo = setInterval(() => {
        createPalta();
      }, 500);
    }
  }, 25000);

  setTimeout(() => {
    clearInterval(intervalo);
    if (!pausado) {
      intervalo = setInterval(() => {
        createPalta();
      }, 400);
    }
  }, 30000);

  setTimeout(() => {
    clearInterval(intervalo);
    if (!pausado) {
      intervalo = setInterval(() => {
        createPalta();
      }, 300);
    }
  }, 35000);

  setTimeout(() => {
    clearInterval(intervalo);
    if (!pausado) {
      intervalo = setInterval(() => {
        createPalta();
      }, 200);
    }
  }, 40000);

  setTimeout(() => {
    clearInterval(intervalo);
    if (!pausado) {
      intervalo = setInterval(() => {
        createPalta();
      }, 100);
    }
  }, 60000);
};

const toggleButton = (jugar, pausar) => {
  if (pausado) {
    jugar.classList.add("show");
    pausar.classList.remove("show");
  } else {
    pausar.classList.add("show");
    jugar.classList.remove("show");
  }
};
