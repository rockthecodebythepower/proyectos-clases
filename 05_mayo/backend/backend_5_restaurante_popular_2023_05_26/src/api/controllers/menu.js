const Menu = require("../models/menu")

const getAllMenus = async (req, res, next) => {

    try {
        
        const menus = await Menu.find().populate("platos");

        return res.status(200).json(menus)

    } catch (error) {
        return res.status(400).json("error")
    }

}

const postMenu = async (req, res, next) => {

    try {
        
        const newMenu = new Menu(req.body);

        const menuDB = await newMenu.save()

        return res.status(201).json(menuDB);

    } catch (error) {
        return res.status(400).json("error")
    }

}

module.exports = { getAllMenus, postMenu }