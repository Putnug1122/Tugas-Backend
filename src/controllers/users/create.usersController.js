const { users } = require("../../models");
const service = async (req, res) => {
  try {
    const payload = req.body;
    const requestDB = await users.create(payload);
    return res.json({ msg: "User berhasil ditambahkan", data: requestDB });
  } catch (error) {
    return res.status(500).json({ msg: error.toString });
  }
};

module.exports = { service };
