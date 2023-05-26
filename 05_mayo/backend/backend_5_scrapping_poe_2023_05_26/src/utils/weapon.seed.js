const mongoose = require("mongoose");
const Weapon = require("../api/models/weapon.model");

const weaponsJSON = require("../../weapons.json");

//Vamos a crear modelos Weapon por cada una de las armas del JSON
//De esta forma nos aseguramos que todas los objetos del JSON coinciden con el modelo y además lo adaptamos para entrar en la base de datos
const weaponsDocuments = weaponsJSON.map((weapon) => new Weapon(weapon));

//Conectarnos a la base datos
mongoose
	.connect("mongodb://localhost:27017/pathofexile", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(async () => {
		//Vamos a comprobar si existen Weapons en la base de datos
		const allWeapons = await Weapon.find();
		//Si hay ya Weapons en la base de datos, las borramos
		if (allWeapons.length) {
			await Weapon.collection.drop();
		}
	})
	.catch((err) => console.log("Error deleting weapons", err))
	.then(async () => {
		//Metemos todas las Weapon de tipo Weapon en la base de datos
		await Weapon.insertMany(weaponsDocuments);
	})
	.catch((err) => console.log("Error creating weapons", err))
	//Finalmente cortamos la conexión con la base de datos
	.finally(() => mongoose.disconnect());
