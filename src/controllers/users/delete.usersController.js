const { users } = require("../../models");
const service = async (req, res) => {
  try {
    const where = { id: req.params.id };
    const requestDB = await users.destroy({ where });
    return res.json({
      msg: `Data dengan id:${where.id} berhasil dihapus`,
      data: requestDB,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
