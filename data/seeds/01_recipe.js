exports.seed = function (knex) {
  return knex("recipes")
    .truncate()

    .then(() => knex("ingredients").truncate())
    .then(() => knex("instructions").truncate())

    .then(() => {
      return knex("recipes").insert([
        { id: 1, name: "grilled cheese" },
        { id: 2, name: "scrambled eggs" },
      ]);
    })

    .then(() => {
      return knex("ingredients").insert([
        {
          id: 1,
          name: "bread",
          quantity: 2,
          unit: "slice",
          notes: "recommend whole wheat",
          recipe_id: 1,
        },
        {
          id: 2,
          name: "cheese",
          quantity: 2,
          unit: "slice",
          notes: "recommend swiss and chedder",
          recipe_id: 1,
        },
        {
          id: 3,
          name: "butter",
          quantity: 1,
          unit: "tbsp",
          notes: "reccomend margarine",
          recipe_id: 1,
        },
        {
          id: 4,
          name: "eggs",
          quantity: 2,
          unit: "whole",
          notes: "recommend free range",
          recipe_id: 2,
        },
        {
          id: 5,
          name: "cheese",
          quantity: 1,
          unit: "cup",
          notes: "recommend colby jack",
          recipe_id: 2,
        },
        {
          id: 6,
          name: "butter",
          quantity: 1,
          unit: "tbsp",
          notes: "recommend free margarine",
          recipe_id: 2,
        },
      ]);
    })

    .then(() => {
      return knex("instructions").insert([
        {
          id: 1,
          step_number: 1,
          description: "cover one slide of each slice of bread with butter",
          recipe_id: 1,
        },
        {
          id: 2,
          step_number: 2,
          description: "place cheese between slices of bread (butter side out)",
          recipe_id: 1,
        },
        {
          id: 3,
          step_number: 3,
          description: "cook in pan butter-side down until done",
          recipe_id: 1,
        },
        {
          id: 4,
          step_number: 4,
          description: "put onto plate and enjoy",
          recipe_id: 1,
        },
        {
          id: 5,
          step_number: 1,
          description: "crack eggs into a bowl and wisk until mixed",
          recipe_id: 2,
        },
        {
          id: 6,
          step_number: 2,
          description:
            "put butter on heated pan until melted and spread across pan",
          recipe_id: 2,
        },
        {
          id: 7,
          step_number: 3,
          description:
            "pour eggs onto pan and mix with spatula to prevent burning, do this until all egg is cooked",
          recipe_id: 2,
        },
        {
          id: 8,
          step_number: 4,
          description:
            "put cheese on eggs and continue to mix till cheese is melted",
          recipe_id: 2,
        },
        {
          id: 9,
          step_number: 5,
          description: "put eggs onto a plate and enjoy",
          recipe_id: 2,
        },
      ]);
    });
};
