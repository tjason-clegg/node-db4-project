const db = require("../data/db.js");

function getRecipes() {
  return db("recipes");
}

function getIngredients(receipe_id) {
  return db("ingredients AS in")
    .select(
      "in.id AS ingredient_id",
      "in.name",
      "in.quantity",
      "in.notes",
      "recipes.name AS receipe_name",
      "recipes.id AS receipe_id"
    )
    .join("recipes", "receipe_id", "recipes.id")
    .where("receipe_id", receipe_id);
}

function getInstructions(receipe_id) {
  return db("instructions AS ins")
    .select(
      "ins.id",
      "rec.name AS receipe_name",
      "ins.step_number",
      "ins.description",
      "recipe_id"
    )
    .join("recipes AS rec", "recipe_id", "rec.id")
    .where("recipe_id", receipe_id);
}

module.exports = {
  getRecipes,
  getIngredients,
  getInstructions,
};
