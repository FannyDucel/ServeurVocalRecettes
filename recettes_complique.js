function getRecipesByIngredient(ingredient) {
  const recipes = {
    "pâtes": [
      {
        name: "lasagne",
        ingredients: ["pâtes", "sauce tomate", "viande hachée", "fromage"],
        directions: ["Cuire les pâtes selon les instructions sur le paquet.", "Faire revenir la viande hachée dans une poêle.", "Superposer les pâtes, la sauce, la viande et le fromage dans un plat à gratin.", "Cuire au four pendant 30 minutes."]
      },
      {
        name: "spaghetti carbonara",
        ingredients: ["spaghetti", "œufs", "lardons", "parmesan"],
        directions: ["Cuire les spaghetti selon les instructions sur le paquet.", "Faire revenir les lardons dans une poêle.", "Battre les œufs et le parmesan dans un bol.", "Mélanger les spaghetti cuits avec les lardons et le mélange d'œufs."]
      },
      {
        name: "pâtes primavera",
        ingredients: ["pâtes", "légumes", "crème", "fromage"],
        directions: ["Cuire les pâtes selon les instructions sur le paquet.", "Cuire les légumes dans une poêle.", "Ajouter la crème et le fromage à la poêle.", "Mélanger les pâtes avec la sauce."]
      }
    ],
    "poulet": [
      {
        name: "poulet parmesan",
        ingredients: ["poulet", "chapelure", "sauce tomate", "fromage mozzarella"],
        directions: ["Enrober le poulet de chapelure.", "Faire frire le poulet dans une poêle.", "Superposer le poulet, la sauce et le fromage dans un plat à gratin.", "Cuire au four pendant 20 minutes."]
      },
      {
        name: "fajitas de poulet",
        ingredients: ["poulet", "poivrons", "oignons", "tortillas"],
        directions: ["Trancher le poulet, les poivrons et les oignons.", "Cuire le poulet, les poivrons et les oignons dans une poêle.", "Réchauffer les tortillas au four.", "Servir le poulet et les légumes dans les tortillas."]
      },
      {
        name: "poulet alfredo",
        ingredients: ["poulet", "pâtes", "crème", "parmesan"],
        directions: ["Cuire les pâtes selon les instructions sur le paquet.", "Cuire le poulet dans une poêle.", "Ajouter la crème et le parmesan à la poêle.", "Mélanger les pâtes avec la sauce."]
      }
    ],
    "légumes": [
      {
        name: "sauté de légumes",
        ingredients: ["légumes", "sauce soja", "riz"],
        directions: ["Cuire le riz selon les instructions sur le paquet.", "Cuire les légumes dans une poêle.", "Ajouter la sauce soja à la poêle.", "Servir les légumes sur le riz."]
  }
    ]
    // add more ingredients and corresponding recipes here
  };

  if (recipes.hasOwnProperty(ingredient)) {
    return recipes[ingredient];
  } else {
    return [];
  }
}
