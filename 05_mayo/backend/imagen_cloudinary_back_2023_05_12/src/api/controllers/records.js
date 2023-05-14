const Record = require("../models/records");

const getAllRecords = async (req, res, next) => {
  try {
    const records = await Record.find();

    return res.status(200).json(records);
  } catch (error) {
    return res.status(400).json({ mensaje: "No se han podido leer las grabaciones en la bbdd", error})
  }
};

const postRecord = async (req, res, next) => {
    try {
        const newRecord = new Record(req.body);

        if (req.file) {
            newRecord.record = req.file.path;
        }

        const RecordPosted = await newRecord.save();

        return res.status(201).json(RecordPosted);

    } catch (error) {
      return res.status(400).json({ mensaje: "No se ha podido crear la grabacion en la bbdd", error})
    }
  };

module.exports = {
  getAllRecords,
  postRecord
};
