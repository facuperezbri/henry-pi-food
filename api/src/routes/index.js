const { Router } = require("express");
const recipesRoute = require("./recipes");

const router = Router();

router.use("/recipes", recipesRoute);

module.exports = router;
