function getRecipesByIngredient(ingredient) {
  const recipes = {
    "pâtes": ["lasagne","spaghetti carbonara", "pâtes primavera"],
    "légumes" : ["sauté de légumes"]
  };

  if (recipes.hasOwnProperty(ingredient)) {
    return recipes[ingredient];
  } else {
    return [];
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getIngredientsByRecipe(recipeName) {
  const recipes = {
    "lasagne": ["pasta", "tomato sauce", "ground beef", "cheese"],
    "spaghetti carbonara": ["spaghetti", "eggs", "bacon", "parmesan cheese"],
    "pâtes primavera": ["pasta", "vegetables", "cream", "cheese"],
    "chicken parmesan": ["chicken", "breadcrumbs", "tomato sauce", "mozzarella cheese"],
    "chicken fajitas": ["chicken", "peppers", "onions", "tortillas"],
    "chicken alfredo": ["chicken", "pasta", "cream", "parmesan cheese"],
    "sauté de légumes": ["vegetables", "soy sauce", "rice"],
    "vegetable lasagna": ["pasta", "vegetables", "tomato sauce", "cheese"],
    "vegetable soup": ["vegetables", "chicken broth", "spices"]
  };
  
  if (recipes.hasOwnProperty(recipeName)) {
    return recipes[recipeName];
  } else {
    return [];
  }
}

function getTimeByRecipe(recipeName) {
  const recipes = {
    "lasagne": "50 minutes",
    "spaghetti carbonara": "20 minutes",
    "pâtes primavera": "30 minutes"
  };

  if (recipes.hasOwnProperty(recipeName)) {
    return recipes[recipeName];
  } else {
    return "Recette introuvable";
  }
}

function getInstructionsByRecipe(recipeName) {
  const recipes = {
    "lasagne" : ["Faire la sauce tomate.", "Préparer la farce végétarienne.", "Monter et enfourner."],
    "spaghetti carbonara" : ["Faire cuire les pâtes.", "Mettre l'oeuf."],
    "pâtes primavera" : ["Comprendre de quoi il s'agit.", "Faire."]
   };

  if (recipes.hasOwnProperty(recipeName)) {
    return recipes[recipeName];
  } else {
    return "Recette introuvable";
  }
}
