import qrcode from "qrcode";

const canvasElement = document.querySelector("canvas");
const input = document.querySelector("input");
const boton = document.querySelector("button");

const generarqr = async () => {
  let DNI = input.value;

  const respuesta = await fetch("https://qr-codes-xi.vercel.app/entradas/" + DNI, {
    method: "POST"
  });

  const entrada = await respuesta.json();

  qrcode.toCanvas(canvasElement, entrada.url);
};

boton.addEventListener("click", generarqr);
