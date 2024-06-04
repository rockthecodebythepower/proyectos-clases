const Worker = require("../models/worker");

const getWorkers = async (req, res, next) => {
  try {
    const workers = await Worker.find();
    return res.status(200).json(workers);
  } catch (error) {
    return res.status(400).json("Error");
  }
};

const getWorker = async (req, res, next) => {
  try {
    const { name, number } = req.query;
    let nameDef = name;

    if (!name) {
      nameDef = "90iemv093ervn0wer98vnewr89vn089234n4389vn349";
    }

    const workers = await Worker.find({
      $or: [{ name: new RegExp(nameDef, "i") }, { number }],
    }).populate("registers");
    return res.status(200).json(workers);
  } catch (error) {
    return res.status(400).json("Error");
  }
};

const postWorker = async (req, res, next) => {
  try {
    const worker = new Worker(req.body);
    const w = await worker.save();
    return res.status(201).json(w);
  } catch (error) {
    return res.status(400).json("Error");
  }
};

const updateWorker = async (req, res, next) => {
  try {
    const { registerData, idWorker, hours } = req;

    const worker = await Worker.findById(idWorker);

    let updatedFields = {
      $push: { registers: registerData },
      $inc: {},
    };

    if (worker.hoursPerDay + hours > 8) {
      const extraHours = worker.hoursPerDay + hours - 8;
      updatedFields.$inc.extraHoursPerMonth = extraHours;
      updatedFields.$inc.hoursPerDay = 8 - worker.hoursPerDay;
    } else {
      updatedFields.$inc.hoursPerDay = hours;
    }

    await Worker.findByIdAndUpdate(idWorker, updatedFields);
    next();
  } catch (error) {
    return res.status(400).json("Error");
  }
};

module.exports = {
  getWorkers,
  getWorker,
  postWorker,
  updateWorker,
};
