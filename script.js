// Preparation

const preparationSection = document.querySelector(".preparation-content");
const preparationList = preparationSection.querySelector("ul");

let preparationsTime = [
  {
    title: "Total",
    time: "Approximately 10 minutes",
  },
  {
    title: "Preparation",
    time: "5 minutes",
  },
  {
    title: "Cooking",
    time: "5 minutes",
  },
];

preparationList.innerHTML = preparationsTime
  .map((preparation) => {
    return `<li><span class="bold">${preparation.title}</span><span>: ${preparation.time}</span></li>`;
  })
  .join("");
console.log(preparationList);

// Ingredients

const ingredientsSection = document.querySelector(".ingredients");
const ingredientsList = ingredientsSection.querySelector("ul");

let Ingredients = [
  "2-3 eggs",
  "Salt, to taste",
  "Pepper, to taste",
  "1 tablespoon of butter or oil",
  "fillings cheese, diced vegetables, cooked meats, herbs",
];

ingredientsList.innerHTML = Ingredients.map((ingredient) => {
  return `<li><span>${ingredient}<span></li>`;
}).join("");
console.log(ingredientsList);

// Instructions

const instructionsSection = document.querySelector(".instructions");
const instructionsList = instructionsSection.querySelector("ol");

let Instructions = [
  {
    instruction: "Beat the eggs",
    description:
      "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
  },
  {
    instruction: "Heat the pan",
    description:
      "Place a non-stick frying pan over medium heat and add butter or oil.",
  },
  {
    instruction: "Cook the omelette",
    description:
      "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
  },
  {
    instruction: "Add fillings (optional)",
    description:
      "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
  },
  {
    instruction: "Fold and serve",
    description:
      "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
  },
  {
    instruction: "Enjoy",
    description: "Serve hot, with additional salt and pepper if needed.",
  },
];

instructionsList.innerHTML = Instructions.map((instruction) => {
  return `<li><span class="bold">${instruction.instruction}</span><span>: ${instruction.description}</span></li>`;
}).join("");
console.log(instructionsList);

// Nutritions

const nutritionsSection = document.querySelector(".nutrition");
const nutritionsList = nutritionsSection.querySelector("table");

let Nutrition = [
  {
    name: "Calories",
    value: "277kcal",
  },
  {
    name: "Carbs",
    value: "0g",
  },
  {
    name: "Protein",
    value: "20g",
  },
  {
    name: "Fat",
    value: "22g",
  },
];

nutritionsList.innerHTML = Nutrition.map((nutrition) => {
  return `<tr><td>${nutrition.name}</td><td><span class="bold value-nutrition">${nutrition.value}</span></td></tr>`;
}).join("");
console.log(nutritionsList);
