const { Router } = require("express");
const router = Router();
const { Diet } = require("../db");
const { preload } = require("../controllers/dietTypesController");

router.get("/", async (req, res, next) => {
	try {
		let allTypes = await preload();
		allTypes = await preload();
		res.send(allTypes);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
