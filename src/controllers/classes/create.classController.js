const { classes } = require("../../models");
const service = async (req, res) => {
  try {
    const payload = req.body;
    const requestDB = await classes.create(payload);
    return res.json({ msg: "Kelas berhasil ditambahkan", data: requestDB });
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
