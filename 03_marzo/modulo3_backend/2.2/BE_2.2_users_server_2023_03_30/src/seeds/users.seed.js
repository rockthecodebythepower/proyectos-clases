const mongoose = require('mongoose')
const User = require('../api/models/user.model')

const usersJson = require('./backup.json')

//Vamos a crear un conjunto de usuarios de tipo User
const users = usersJson.map((user) => new User(user))

//Conectamos con la base de datos
mongoose
  .connect('mongodb://localhost:27017/users_server', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    //Con el método find vamos a generar un array con todos los usuarios que hay en la base de datos
    const foundUsers = await User.find()

    //Si hay personajes en foundUsers vamos a hacer un drop en la colección User
    if (foundUsers.length) {
      await User.collection.drop()
      console.log('User collection dropped')
    }
  })
  .catch((error) => console.log('Error dropping user collection', error))
  .then(async () => {
    //Si hemos vaciado la colección (si es necesario), inyectamos tantos usuarios haya en users
    await User.insertMany(users)
    console.log('User collection created!')
  })
  .catch((error) => console.log('Error creating users', error))
  .finally(() => mongoose.disconnect())
