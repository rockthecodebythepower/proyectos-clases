const User = require('../models/user.model')

const getAllUsers = async (req, res, next) => {
  try {
    //Si por query le llega un numero de page y es un número...
    if (req.query.page && !isNaN(parseInt(req.query.page))) {
      //Contamos el número de users que tenemos
      const numUsers = await User.countDocuments()
      //Almacenamos en una variable el número de página
      let page = parseInt(req.query.page)
      //Alacenamos el número de limit, si no está especificado le indicamos 10
      let limit = req.query.limit ? parseInt(req.query.limit) : 10
      //Vamos a generar las páginas que pueden haber
      let numPages =
        numUsers % limit > 0 ? numUsers / limit + 1 : numUsers / limit
      //Si la pagina indicada por query es mayor que el numero de páginas disponible o es menor que 1, entonces la página automáticamente se setea en 1
      if (page > numPages || page < 1) {
        page = 1
      }
      //Definimos skip para que inicie el muestrado de la información en un punto concreto de la colección
      const skip = (page - 1) * limit

      //Hacemos el find
      const allUsers = await User.find().skip(skip).limit(limit)
      return res.status(200).json({
        info: {
          total: numUsers,
          page: page,
          limit: limit,
          next:
            numPages >= page + 1
              ? `/api/v1/users?page=${page + 1}&limit=${limit}`
              : null,
          prev:
            page != 1 ? `/api/v1/users?page=${page - 1}&limit=${limit}` : null,
        },
        results: allUsers,
      })
      //Vamos a definir la respuesta por defecto si no se indica mas información
    } else {
      const allUsers = await User.find().limit(10)
      const numUsers = await User.countDocuments()

      return res.status(200).json({
        info: {
          total: numUsers,
          page: 1,
          limit: 10,
          next: numUsers > 10 ? `/api/v1/users?page=2&limit=10` : null,
          prev: null,
        },
        results: allUsers,
      })
    }
  } catch (error) {
    return next('Users not found')
  }
}

const createUser = async (req, res, next) => {
  try {
    const newUser = new User(req.body)
    const createdUser = await newUser.save()
    res.status(201).json(createdUser)
  } catch (error) {
    return next('Error creating user', error)
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedUser = await User.findByIdAndDelete(id)
    return res.status(200).json(deletedUser)
  } catch (error) {
    return next(error)
  }
}

const insertAllUsers = async (req, res, next) => {
  try {
    await User.insertMany(require('../../seeds/backup.json'))
    return res.status(201).json('Users created')
  } catch (error) {
    return next(error)
  }
}

const dropUsers = async (req, res, next) => {
  try {
    await User.collection.drop()
    return res.status(200).json('Users deleted')
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  getAllUsers,
  createUser,
  deleteUser,
  insertAllUsers,
  dropUsers,
}
