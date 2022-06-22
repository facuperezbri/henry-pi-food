const { Router } = require("express");
const router = Router();

router.get("/", (req, res, next) => {
	res.send("Soy el get de Diets");
});

module.exports = router;
