var express = require("express");
var router = express.Router();
const classRoutes = require("../controllers/classes/routes");
const materialRoutes = require("../controllers/materials/routes");
const schedulesRoutes = require("../controllers/schedules/routes");
const usersRoutes = require("../controllers/users/routes");
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.use("/class", classRoutes);
router.use("/material", materialRoutes);
router.use("/schedule", schedulesRoutes);
router.use("/user", usersRoutes);
module.exports = router;
