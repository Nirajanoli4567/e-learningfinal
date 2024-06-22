const express = require("express");
const router = express.Router();
const controller = require("./controller");
const verifyUser = require("../authentication/auth.middleware");

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", verifyUser, controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

module.exports = router;
