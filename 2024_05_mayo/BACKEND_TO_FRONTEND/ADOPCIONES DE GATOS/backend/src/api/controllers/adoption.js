const Adoption = require("../models/adoption");

const createAdoption = async (req, res, next) => {
    try {
        
       const newAdoption = new Adoption({
        user: req.user._id,
        message: req.body.message,
        cat: req.body.cat
       });

       const adoption = await newAdoption.save();

       const adoptionToSed = await Adoption.findById(adoption._id).populate("cat user");

        return res.json(adoptionToSed);
    } catch (error) {
       return res.status(400).json("error");
    }
}

module.exports = {
    createAdoption
}