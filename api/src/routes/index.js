const { Router } = require("express");
const recipesRoute = require("./recipes");
const dietsRoute = require("./diets");

const router = Router();

router.use("/recipes", recipesRoute);
router.use("/types", dietsRoute);

module.exports = router;
