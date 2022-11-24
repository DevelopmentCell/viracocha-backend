import Router from "express";
// const axios = require("axios");
const { Users } = require("../db.ts");

const router = Router();

// Si recibo un idPokemon por params los busco y lo retorno
router.get("/", async (_req, res) => {
  console.log(Users);
  res.status(200).send("App working...");
});

module.exports = router;
