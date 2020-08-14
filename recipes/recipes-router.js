const express = require("express");

const Recipes = require("./recipes-model.js");

const router = express.Router({
  mergeParams: true,
});

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: `There was an error retrieving recipes` });
    });
});

router.get("/:id/ingredients", (req, res) => {
  const { id } = req.params;
  Recipes.getIngredients(id)
    .then((ing) => {
      res.status(200).json(ing);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: `Failed to get a list of ingrendients: ${err}` });
    });
});

router.get("/:id/instructions", (req, res) => {
  const { id } = req.params;
  Recipes.getInstructions(id)
    .then((ins) => {
      res.status(200).json(ins);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: `There was an error: ${err}` });
    });
});

module.exports = router;
