import fs from "fs";
import inquirer from "inquirer";

//Arrancamos el prompt de inquirer, que preguntara una serie de preguntas objetos
inquirer
	.prompt([
		{
			type: "input",
			name: "name",
			message: "¿Cuál es tu nombre completo?",
		},
		{
			type: "input",
			name: "profession",
			message: "¿Cuál es tu profesión?",
		},
		{
			type: "input",
			name: "currentposition",
			message: "Dime tu actual puesto de trabajo",
		},
		{
			type: "input",
			name: "location",
			message: "¿En qué ciudad vives?",
		},
		{
			type: "input",
			name: "about",
			message: "Cuéntame un poco sobre ti",
		},
		{
			type: "input",
			name: "contact",
			message: "¿Cuál es tu dirección de e-mail?",
		},
	])
	.then((answers) => {
		//Generamos nuestra plantilla para el README a raiz de answers, que es un objeto con las respuestas cuyas claves son los name de las preguntas
		const text = `# Hi! My name is ${answers.name}
        
        ## ${answers.profession}
        
        👨🏼‍💻 I'm currently working on ${answers.currentposition}
        
        🌏 I'm based in ${answers.location}
        
        📖 ${answers.about}
        
        💌 Contact me at ${answers.contact}`;

		//Creamos un fichero README.md con este string dentro
		fs.writeFile("README.md", text, () => {
			console.log(
				"README generado. Ahora solo te queda copiar su contenido y sustituirlo en tu perfil de GitHub"
			);
		});
	});
