const { materials } = require("../../models");
const service = async (req, res) => {
  try {
    const payload = req.body;
    const where = { id: req.params.id };
    const requestDB = await materials.update(payload, { where });
    return res.json({
      msg: `Data dengan id:${where.id} berhasil diupdate`,
      data: requestDB,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
