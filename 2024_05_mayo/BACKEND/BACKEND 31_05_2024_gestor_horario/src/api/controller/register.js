const Register = require("../models/register");
const { updateWork } = require("./work");
const { updateWorker } = require("./worker");

const getRegisters = async (req, res, next) => {
  try {
    const { date } = req.params;
    console.log(date);
    const registers = await Register.find({ date })
      .populate("worker")
      .populate("work");
    return res.status(200).json(registers);
  } catch (error) {
    return res.status(400).json("Error");
  }
};

const postRegister = async (req, res, next) => {
  try {
    const register = new Register(req.body);
    const r = await register.save();
    req.registerData = r;
    req.idWorker = req.body.worker;
    req.idWork = req.body.work;
    req.hours = req.body.hours;
    next();
  } catch (error) {
    return res.status(400).json("Error");
  }
};

module.exports = {
  getRegisters,
  postRegister,
};
