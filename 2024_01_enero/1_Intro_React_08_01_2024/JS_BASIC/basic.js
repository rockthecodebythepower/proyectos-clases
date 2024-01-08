const saludar = ({ nombre, apellido = "" }) => {
    
  console.log(`Hola ${nombre} ${apellido}`);
};

const nombre = "Alexis"

saludar({ nombre: nombre, apellido: "García" });
saludar({ apellido: "Sanchez", nombre: "Virginia" });
saludar({ nombre: "Pablo" });

// te estoy enviando objetos con las mismas propiedades todos
