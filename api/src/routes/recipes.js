const { Router } = require("express");
const router = Router();

router.get("/", (req, res, next) => {
	const { name } = req.query;
	if (name) {
		res.send(`Hola, soy ${name} de req.query`);
	}
	res.send("Hola soy /get de recipes");
});

router.get("/:idReceta", (req, res, next) => {
	const { idReceta } = req.params;
	res.send(`Hola, soy ${idReceta} de req.params`);
});

router.post("/", (req, res, next) => {
	const { name, summary, healthScore, steps } = req.body;
	res.send(`Yo traigo los valores de body
    name: ${name}`);
});

module.exports = router;
