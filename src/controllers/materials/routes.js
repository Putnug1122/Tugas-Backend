const express = require("express");
const router = express.Router();
const createMaterials = require("./create.materialsController");
const getMaterials = require("./get.materialsController");
const updateMaterials = require("./update.materialsController");
const deleteMaterials = require("./delete.materialsController");
router.post("/", createMaterials.service);
router.get("/", getMaterials.service);
router.put("/:id", updateMaterials.service);
router.delete("/:id", deleteMaterials.service);
module.exports = router;
