import { useEffect, useMemo, useRef, useState } from "react";

let pos_ini = 3449.05;

export const useRoulette = (elements, size) => {
  const canvasRef = useRef();

  const [disabled, setDisabled] = useState(false);

  const rotar = () => {
    setDisabled(true);

    canvasRef.current.style.transform = `rotate(${pos_ini}deg)`;
    pos_ini += 3449.05;
    canvasRef.current.style.transition = "all, 3s";

    setTimeout(() => {
      setDisabled(false);
      /* const imageData = context.getImageData(center, center - 100, 1, 1);
      console.log(imageData);
      console.log(imageData.data); */
    }, 3500);
  };

  useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      let center = canvasRef.current.width / 2;

        console.log("hola", elements);

      for (let i = 0; i < elements.length; i++) {
        context.beginPath();
        context.moveTo(center, center);
        context.arc(
          center,
          center,
          center - 20,
          (i * 2 * Math.PI) / elements.length,
          ((i + 1) * 2 * Math.PI) / elements.length
        );
        context.lineTo(center, center);
        context.fillStyle = elements[i].color;
        context.fill();

        context.save();

        context.translate(center, center);
        context.rotate(
          (3 * 2 * Math.PI) / (5 * elements.length) +
            (i * 2 * Math.PI) / elements.length
        );
        context.translate(-center, -center);
        context.font = `${size / 15}px Sans Serif`;
        context.textAlign = "right";
        context.fillStyle = "black";
        context.fillText(
          elements[i].text,
          canvasRef.current.width - 30,
          center
        );
        context.restore();
      }
    }
  }, [canvasRef.current]);

  return {
    canvasRef,
    disabled,
    rotar,
  };
};
