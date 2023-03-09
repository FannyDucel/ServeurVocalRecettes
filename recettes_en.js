function getRecipesByIngredient(ingredient) {
  const recipes =   {"lentils": ["lentil dahl", "lentil salad", "lentil biryani"],
"chickpeas": ["hummus", "falafels", "chickpea curry"],
"eggplants": ["vegetarian moussaka", "eggplant caviar", "ratatouille"],
"mushrooms": ["mushroom risotto", "mushroom toast", "mushroom quiche"],
"zucchinis": ["zucchini spaghetti", "zucchini flans", "ratatouille"],
"broccoli": ["broccoli salad", "broccoli tart", "broccoli pasta"],
"leeks": ["leek tart", "leek fondue", "leek gratin"],
"cauliflower": ["cauliflower couscous", "cauliflower curry", "cauliflower mash"],
"sweet potatoes": ["sweet potato fries", "sweet potato curry", "sweet potato soup"],
"tofu": ["tofu and vegetable stir-fry", "tofu stir-fry noodles", "tofu curry"],
"quinoa": ["quinoa salad", "quinoa curry", "quinoa bowl"],
"spinach": ["spinach curry", "spinach tart", "spinach lasagna"],
"bell peppers": ["bell pepper fajitas", "bell pepper tart", "stuffed bell peppers"],
"celeriac": ["roasted celeriac", "celeriac soup", "celeriac salad"],
"carrots": ["cumin roasted carrots", "carrot curry", "carrot tart"],
"green beans": ["garlic sautéed green beans", "green bean salad", "green bean gratin"],
 "onions": ["onion soup", "onion pie", "onion pan"],
  "avocado": ["guacamole", "avocado and mango salad", "avocado tacos"],
  "cashew nuts": ["stir-fried tofu with cashews", "vegetable curry with cashew nuts", "coleslaw with cashew nuts"],
  "bananas": ["banana ice cream", "baked bananas with chocolate", "banana bread"],
  "apples": ["apple pie", "apple compote", "baked caramelised apples"],
  "lemons": ["lemon pie", "lemon sorbet", "lemon cake"],
  "chocolate": ["chocolate brownies", "chocolate mousse", "chocolate cake"],
  "raspberries": ["raspberry tart", "raspberry sorbet", "raspberry clafoutis"],
  "tomatoes": ["homemade tomato sauce", "tomato pie", "tomato and mozzarella salad"],
  "potatoes": ["mashed potatoes", "sweet potato fries", "potato and spinach curry"],
  "rice": ["stir-fried rice with vegetables", "rice with vegetable milk", "rice bowl with black beans"],
  "pasta": ["spaghetti with garlic and olive oil", "vegetable lasagne", "pasta salad with grilled vegetables"],
  "eggs": ["mushroom omelette", "spinach quiche", "huevos rancheros"],
  "cheese": ["cheese pizza", "cheese fondue", "macaroni and cheese"]
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
    'lentil dahl': ['lentils', 'onions', 'garlic', 'ginger', 'curry powder', 'diced tomatoes', 'coconut milk', 'coriander'],
    'lentil salad': ['lentils', 'tomatoes', 'red onions', 'cucumber', 'feta', 'mint'],
    'lentil biryani': ['lentils', 'onions', 'garlic', 'ginger', 'tomatoes', 'curry powder', 'coriander', 'cardamom', 'cinnamon', 'cumin', 'basmati rice'],
    'hummus': ['chickpeas', 'tahini', 'lemon juice', 'garlic', 'olive oil', 'paprika'],
    'falafels': ['chickpeas', 'onions', 'garlic', 'coriander', 'cumin', 'flour', 'baking powder'],
    'chickpea curry': ['chickpeas', 'onions', 'garlic', 'ginger', 'curry powder', 'diced tomatoes', 'coconut milk', 'coriander'],
    'vegetarian moussaka': ['eggplants', 'potatoes', 'onions', 'garlic', 'tomato coulis', 'milk', 'flour', 'grated cheese'],
    'eggplant caviar': ['eggplant', 'garlic', 'lemon juice', 'tahini', 'olive oil', 'cumin'],
    'ratatouille': ['eggplants', 'zucchinis', 'peppers', 'onions', 'garlic', 'tomato coulis', 'thyme', 'parsley'],
    'mushroom risotto': ['arborio rice', 'mushrooms', 'onions', 'garlic', 'vegetable stock', 'parmesan', 'butter'],
    'mushroom toast': ['mushrooms', 'garlic', 'parsley', 'farmhouse bread', 'fresh cheese'],
    'mushroom quiche': ['puff pastry', 'mushrooms', 'onions', 'garlic', 'cream', 'eggs', 'grated cheese'],
    'zucchini spaghetti': ['zucchinis', 'garlic', 'olive oil', 'cherry tomatoes', 'basil', 'parmesan'],
    'zucchini flans': ['zucchinis', 'onions', 'garlic', 'eggs', 'cream', 'grated cheese'],
    'broccoli salad': ['broccoli', 'red onions', 'raisins', 'walnuts', 'vinaigrette'],
    'broccoli tarts': ['puff pastry', 'broccoli', 'onions', 'garlic', 'cream', 'eggs', 'grated cheese'],
    'broccoli pasta': ['pasta', 'broccoli', 'olive oil', 'garlic', 'parmesan'],
    'leek tart': ['puff pastry', 'leeks', 'crème fraîche', 'eggs', 'grated cheese'],
    'leek fondue': ['leeks', 'butter', 'cream', 'grated cheese'],
    'leek gratin': ['leeks', 'butter', 'flour', 'milk', 'grated cheese'],
    'cauliflower couscous': ['cauliflower', 'olive oil', 'cumin', 'coriander', 'onion', 'raisins'],
    'cauliflower curry': ['cauliflower', 'olive oil', 'onion', 'garlic', 'ginger', 'curry', 'coconut milk'],
    'cauliflower mash': ['cauliflower', 'potatoes', 'butter', 'milk'],
    'sweet potato fries': ['sweet potatoes', 'olive oil', 'paprika', 'salt'],
    'sweet potato curry': ['sweet potatoes', 'onion', 'garlic', 'ginger', 'curry', 'coconut milk'],
    'sweet potato soup': ['sweet potato', 'onion', 'garlic', 'ginger', 'vegetable broth', 'coconut milk'],
    'tofu and vegetable stir-fry': ['tofu', 'vegetables (carrots, peppers, zucchinis)', 'soy sauce', 'olive oil', 'garlic'],
    'tofu stir-fry noodles': ['noodles', 'tofu', 'soy sauce', 'garlic', 'onion', 'oil'],
    'tofu curry': ['tofu', 'coconut milk', 'curry', 'onion', 'garlic', 'ginger', 'oil', 'cilantro'],
    'quinoa salad': ['quinoa', 'cucumber', 'tomato', 'bell pepper', 'red onion', 'feta cheese', 'mint', 'parsley', 'lemon', 'oil'],
    'quinoa curry': ['quinoa', 'coconut milk', 'curry', 'chickpeas', 'spinach', 'onion', 'garlic', 'ginger', 'oil'],
    'quinoa bowl': ['quinoa', 'chickpeas', 'cucumber', 'carrot', 'avocado', 'feta cheese', 'mint', 'parsley', 'lemon', 'oil'],
    'spinach curry': ['spinach', 'coconut milk', 'curry', 'chickpeas', 'onion', 'garlic', 'ginger', 'oil'],
    'spinach tart': ['pie crust', 'spinach', 'onion', 'garlic', 'eggs', 'heavy cream', 'gruyere cheese', 'nutmeg'],
    'spinach lasagna': ['lasagna noodles', 'spinach', 'onion', 'garlic', 'béchamel sauce', 'gruyere cheese', 'oil'],
    'bell pepper fajitas': ['tortillas', 'bell peppers', 'onion', 'tomato sauce', 'cumin', 'paprika', 'cilantro', 'oil'],
    'bell pepper tart': ['pie crust', 'bell peppers', 'eggs', 'heavy cream', 'gruyere cheese', 'herbes de Provence'],
    'stuffed bell peppers': ['bell peppers', 'rice', 'onion', 'garlic', 'herbes de Provence', 'oil'],
    'roasted celeriac': ['celeriac', 'oil', 'salt', 'pepper', 'herbes de Provence'],
    'celeriac soup': ['celeriac', 'potatoes', 'onion', 'garlic', 'vegetable broth', 'heavy cream', 'oil'],
    'celeriac salad': ['celeriac', 'apple', 'red onion', 'walnuts', 'cider vinegar', 'oil'],
    'cumin roasted carrots': ['carrots', 'cumin', 'oil', 'salt', 'pepper'],
    'carrot curry': ['carrots', 'coconut milk', 'curry', 'chickpeas', 'onion', 'garlic', 'ginger', 'oil'],
    'carrot tart': ['pie crust', 'carrots', 'eggs', 'heavy cream', 'gruyere cheese', 'cumin'],
    "garlic sautéed green beans": ["green beans", "garlic", "olive oil", "salt", "pepper"],
    "green bean salad": ["green beans", "cherry tomatoes", "red onion", "vinaigrette"],
    "green bean gratin": ["green beans", "heavy cream", "gruyere cheese", "garlic", "butter", "salt", "pepper"],
    "onion soup": ["onions", "vegetable broth", "white wine", "thyme", "bay leaf", "gruyere cheese", "baguette"],
    "onion pie": ["puff pastry", "onions", "crème fraîche", "eggs", "butter", "olive oil", "thyme", "salt", "pepper"],
    "onion pan": ["onions", "olive oil", "honey", "balsamic vinegar"],
    "guacamole": ["avocados", "lime", "tomato", "red onion", "cilantro", "salt"],
    "avocado and mango salad": ["mango", "avocado", "cucumber", "red onion", "cilantro", "vinaigrette"],
    "avocado tacos": ["avocados", "tortillas", "corn", "tomatoes", "red onion", "cilantro", "lime"],
    "stir-fried tofu with cashews": ["tofu", "cashews", "onion", "garlic", "ginger", "soy sauce", "honey", "sesame oil"],
    "vegetable curry with cashews": ["assorted vegetables", "cashews", "onion", "garlic", "ginger", "curry powder", "coconut milk", "cilantro", "salt"],
    "coleslaw with cashew nut": ["white cabbage", "carrot", "red onion", "cashews", "vinaigrette"],
    "banana ice cream": ["bananas", "almond milk", "vanilla", "honey"],
    "baked bananas with chocolate": ["bananas", "dark chocolate"],
    "banana bread": ["bananas", "flour", "sugar", "eggs", "butter", "baking powder"],
    "apple pie": ["shortcrust pastry", "apples", "sugar", "butter", "cinnamon"],
    "apple compote": ["apples", "sugar", "cinnamon", "water"],
    'baked caramelized apples': ['apples', 'sugar', 'butter'],
    'lemon pie': ['shortcrust pastry', 'lemons', 'sugar', 'butter', 'eggs'],
    'lemon sorbet': ['lemons', 'sugar', 'water'],
    'lemon cake': ['flour', 'sugar', 'butter', 'eggs', 'lemons', 'baking powder'],
    'chocolate brownies': ['butter', 'dark chocolate', 'sugar', 'flour', 'eggs'],
    'chocolate mousse': ['dark chocolate', 'eggs', 'sugar', 'whipped cream'],
    'chocolate cake': ['dark chocolate', 'butter', 'sugar', 'flour', 'eggs'],
    'raspberry tart': ['shortcrust pastry', 'raspberries', 'sugar', 'eggs', 'crème fraîche'],
    'raspberry sorbet': ['raspberries', 'sugar', 'water'],
    'raspberry clafoutis': ['raspberries', 'sugar', 'flour', 'eggs', 'milk', 'vanilla'],
    'homemade tomato sauce': ['tomatoes', 'onion', 'garlic', 'olive oil', 'sugar', 'salt', 'pepper'],
    'tomato pie': ['shortcrust pastry', 'tomatoes', 'mustard', 'grated cheese', 'olive oil', 'basil'],
    'tomato and mozzarella salad': ['tomatoes', 'mozzarella', 'olive oil', 'basil', 'salt', 'pepper'],
    'mashed potatoes': ['potatoes', 'butter', 'milk', 'salt', 'pepper'],
    'sweet potato fries': ['sweet potatoes', 'olive oil', 'salt', 'pepper'],
    'potato and spinach curry': ['potatoes', 'spinach', 'onion', 'garlic', 'coconut milk', 'curry', 'olive oil', 'salt', 'pepper'],
    'stir-fried rice with vegetables': ['rice', 'carrot', 'bell pepper', 'onion', 'garlic', 'olive oil', 'soy sauce', 'salt', 'pepper'],
    'rice with vegetable milk': ['round rice', 'plant-based milk', 'sugar', 'vanilla'],
    'rice bowl with black beans': ['rice', 'black beans', 'red bell pepper', 'onion', 'coriander', 'olive oil', 'salt', 'pepper'],
    "spaghetti with garlic and olive oil": ['spaghetti', 'garlic', 'olive oil', 'red pepper flakes', 'parsley', 'parmesan', 'salt', 'pepper'],
    'vegetable lasagne': ['lasagna noodles', 'spinach', 'carrot', 'celery', 'zucchini', 'onion', 'garlic', 'canned tomatoes', 'ricotta cheese', 'grated cheese', 'olive oil', 'basil', 'salt', 'pepper'],
    'pasta salad with grilled vegetables': ['pasta', 'eggplant', 'zucchini', 'red bell pepper', 'red onion', 'cherry tomatoes', 'garlic', 'olive oil', 'lemon juice', 'parsley', 'salt', 'pepper'],
    'mushroom omelette': ['eggs', 'mushrooms', 'onion', 'garlic', 'parsley', 'olive oil', 'butter', 'salt', 'pepper'],
    'spinach quiche': ['shortcrust pastry', 'spinach', 'onion', 'garlic', 'eggs', 'sour cream', 'grated cheese', 'olive oil', 'salt', 'pepper'],
    'huevos rancheros': ['tortillas', 'red beans', 'canned tomatoes', 'onion', 'garlic', 'coriander', 'red pepper flakes', 'eggs', 'olive oil', 'salt', 'pepper'],
    'cheese pizza': ['pizza dough', 'tomato sauce', 'grated cheese', 'mozzarella', 'olive oil', 'salt', 'pepper'],
    'cheese fondue': ['fondue cheese', 'bread', 'garlic', 'white wine', 'kirsch'],
    'macaroni and cheese': ['macaroni', 'butter', 'flour', 'milk', 'grated cheese', 'mustard', 'salt', 'pepper']
  };

  if (recipes.hasOwnProperty(recipeName)) {
    return recipes[recipeName];
  } else {
    return [];
  }
}

function getTimeByRecipe(recipeName) {
  const recipes = {
    'lentil dahl': '40 minutes',
'lentil salad': '20 minutes',
'lentil biryani': '60 minutes',
'hummus': '15 minutes',
'falafels': '30 minutes',
'chickpea curry': '40 minutes',
'vegetarian moussaka': '60 minutes',
'eggplant caviar': '40 minutes',
'ratatouille': '50 minutes',
'mushroom risotto': '40 minutes',
'mushroom toast': '15 minutes',
'mushroom quiche': '60 minutes',
'zucchini spaghetti': '30 minutes',
'zucchini flans': '45 minutes',
'broccoli salad': '20 minutes',
'broccoli tarts': '50 minutes',
'broccoli pasta': '25 minutes',
'leek tart': '60 minutes',
'leek fondue': '30 minutes',
'leek gratin': '60 minutes',
'cauliflower couscous': '30 minutes',
'cauliflower curry': '40 minutes',
'cauliflower mash': '30 minutes',
'sweet potato fries': '30 minutes',
'sweet potato curry': '40 minutes',
'sweet potato soup': '40 minutes',
'tofu and vegetables stir-fried': '30 minutes',
'tofu stir-fry noodles': '25 minutes',
'tofu curry': '35 minutes',
'quinoa salad': '25 minutes',
'quinoa curry': '30 minutes',
'quinoa bowl': '25 minutes',
'spinach curry': '30 minutes',
'spinach tart': '50 minutes',
'spinach lasagna': '60 minutes',
'bell pepper fajitas': '30 minutes',
'bell pepper tart': '60 minutes',
'stuffed bell peppers': '60 minutes',
'roasted celeriac': '40 minutes',
'celeriac soup': '40 minutes',
'celeriac salad': '20 minutes',
'cumin roasted carrots': '35 minutes',
'carrot curry': '40 minutes',
'carrot tart': '60 minutes',
"garlic sautéed green beans": '20 minutes',
'green bean salad': '20 minutes',
'green bean gratin': '40 minutes',
"onion soup": '60 minutes',
'onion tart': '60 minutes',
"onion pan": '30 minutes',
'guacamole': '15 minutes',
"avocado and mango salad": '20 minutes',
"avocado tacos": '25 minutes',
'stir-fried tofu with cashews': '25 minutes',
'vegetable curry with cashews': '45 minutes',
'coleslaw with cashew nut': '20 minutes',
'banana ice cream': '10 minutes',
'baked bananas with chocolate': '20 minutes',
'banana bread': '1 hour',
'apple pie': '1 hour',
'apple compote': '30 minutes',
'baked caramelized apples': '25 minutes',
'lemon pie': '1 hour',
'lemon sorbet': '20 minutes',
'lemon cake': '1 hour',
'chocolate brownies': '40 minutes',
'chocolate mousse': '20 minutes',
'chocolate cake': '1 hour',
'raspberry tart': '1 hour',
'raspberry sorbet': '20 minutes',
'raspberry clafoutis': '45 minutes',
'homemade tomato sauce': '2 hours',
'tomato pie': '1 hour',
'tomato and mozzarella salad': '15 minutes',
'mashed potatoes': '30 minutes',
'sweet potato fries': '40 minutes',
'potato and spinach curry': '50 minutes',
'stir-fried rice with vegetables': '30 minutes',
'rice with vegetable milk': '45 minutes',
'rice bowl with black beans': '30 minutes',
"spaghetti with garlic and olive oil": '20 minutes',
'vegetable lasagne': '1 hour 30 minutes',
'pasta salad with grilled vegetables': '30 minutes',
'mushroom omelette': '15 minutes',
'spinach quiche': '1 hour',
'huevos rancheros': '30 minutes',
'cheese pizza': '45 minutes',
'cheese fondue': '30 minutes',
'macaroni and cheese': '30 minutes'
  };

  if (recipes.hasOwnProperty(recipeName)) {
    return recipes[recipeName];
  } else {
    return "Recette introuvable";
  }
}

function getInstructionsByRecipe(recipeName) {
  const recipes = {
    'lentil dahl': ['Cook the lentils in a large pot of boiling water until tender. In a large pan, heat a little oil over medium-high heat.','Add the onions and sauté for about 5 minutes, until tender and lightly golden.','Add the garlic, ginger, and curry powder and cook for 1-2 minutes, until fragrant.','Add the tomatoes and cook for another 5 minutes, stirring occasionally.','Add the lentils and coconut milk, then bring to a boil. Reduce the heat and simmer for about 10 minutes, until the sauce has thickened. Season with salt and pepper to taste. Garnish with fresh cilantro.'],
'lentil salad': ['Cook the lentils in a large pot of boiling water until tender. Drain and rinse under cold water. In a large bowl, mix the cooked lentils, tomatoes, red onions, cucumber, feta cheese, and mint. Drizzle with dressing and toss well.'],
'lentil biryani': ['Heat a little oil in a large pan over medium-high heat.','Add the onions and sauté for about 5 minutes, until tender and lightly golden.','Add the garlic, ginger, and curry powder and cook for 1-2 minutes, until fragrant.','Add the tomatoes and cook for another 5 minutes, stirring occasionally.','Add the cooked lentils, cardamom, cinnamon, and cumin, then mix well.','In another large pot, bring a large amount of water to a boil. Add the rice and cook for about 10 minutes, until tender but still slightly firm.',' Drain the rice and return it to the pot. Add the lentil mixture and mix well. Garnish with fresh cilantro.'],
'hummus': ['In a food processor, mix the chickpeas, tahini, lemon juice, garlic, olive oil, and paprika until smooth.','Add a little water to achieve the desired consistency.'],
'falafels': ['Blend cooked chickpeas with garlic, onions, coriander, cumin, and flour.', 'Form balls and fry in oil.', 'Serve hot with yogurt sauce or hummus.'],
'chickpea curry': ['Sauté onions and garlic in oil.', 'Add spices and drained chickpeas.', 'Stir in coconut milk and simmer for 10 minutes.'],
'vegetarian moussaka': ['Cut eggplants and zucchinis into slices and grill them.', 'Sauté onions and garlic in oil.', 'Add diced tomatoes, tomato paste, spices, and pre-cooked lentils.', 'Arrange the grilled vegetables and lentil mixture in an oven-proof dish.', 'Cover with béchamel sauce and bake for 30 minutes.'],
'eggplant caviar': ['Cut eggplants in half and bake them in the oven.', 'Scoop out the eggplant flesh and mix it with garlic, lemon juice, tahini, and olive oil.', 'Serve chilled with pita bread or crunchy vegetables.'],
'ratatouille': ['Dice the vegetables.', 'Sauté the vegetables in olive oil.', 'Add thyme and garlic.', 'Simmer for 20-30 minutes.'],
'mushroom risotto': ['Heat vegetable broth.', 'Sauté mushrooms in a pan.', 'Add onion and garlic.', 'Add rice and cook, stirring, until it becomes translucent.', 'Add a ladle of broth and stir until absorbed.', 'Continue until rice is cooked.', 'Add grated cheese and butter.', 'Season with salt and pepper.'],
'mushroom toast': ['Toast slices of country bread.', 'Sauté mushrooms in olive oil.', 'Add garlic and parsley.', 'Arrange mushrooms on top of the toasted bread.', 'Add grated cheese.', 'Bake in the oven until cheese is melted.'],
'mushroom quiche': ['Preheat the oven to 180°C.', 'Bake a pastry shell.', 'Sauté mushrooms in olive oil.', 'Place mushrooms on top of the pastry.', 'Beat eggs with crème fraîche.', 'Pour the mixture over the mushrooms.', 'Add grated cheese.', 'Bake for 30 minutes.'],
'zucchini spaghetti': ['Make zucchini spaghetti with a spiralizer.', 'Sauté cherry tomatoes in olive oil.', 'Add garlic and herbs de Provence.', 'Add zucchini spaghetti and sauté for a few minutes.', 'Add grated cheese.', 'Season with salt and pepper.'],
'zucchini flan': ['Preheat the oven to 180°C.', 'Cook diced zucchini in olive oil.', 'Beat eggs with crème fraîche.', 'Mix zucchini with egg mixture.', 'Pour mixture into ramekins.', 'Bake for 20-25 minutes.'],
'broccoli salad': ['Steam broccoli florets.', 'Mix florets with cherry tomatoes and red onions.', 'Add vinaigrette.'],
'broccoli tarts': ['Preheat the oven to 180°C.', 'Steam broccoli florets.', 'Arrange florets on top of a pastry shell.', 'Beat eggs with crème fraîche.', 'Pour the mixture over the pastry and bake for 30 minutes at 180°C.'],
'broccoli pasta': [
'Cook the pasta in a pot of salted boiling water.',
'Add the broccoli cut into small pieces in the pot 5 minutes before the end of the pasta cooking.',
'Drain the pasta and broccoli.',
'In a pan, heat a little olive oil and add a minced garlic clove.',
'Add the pasta and broccoli to the pan and sauté for a few minutes.',
'Season with salt, pepper, and grated parmesan before serving.'
],
'leek tart': [
'Preheat the oven to 180°C.',
'Roll out a puff pastry into a tart pan.',
'In a pan, sauté the sliced leeks in a little olive oil until tender.',
'In a bowl, beat 3 eggs with 20cl of crème fraîche.',
'Add the leeks to the bowl and mix.',
'Pour the mixture onto the puff pastry.',
'Bake for about 30 minutes until the tart is golden brown.'
],
'leek fondue': [
'Slice the leeks and wash them.',
'In a large pot, melt 50g of butter.',
'Add the leeks to the pot and sauté for a few minutes.',
'Add a glass of water to the pot and cover.',
'Cook on low heat for about 30 minutes until the leeks are tender.',
'Add 20cl of crème fraîche to the pot and mix.',
'Season with salt and pepper.'
],
'leek gratin': [
'Preheat the oven to 180°C.',
'Slice the leeks and wash them.',
'In a large pot, melt 50g of butter.',
'Add the leeks to the pot and sauté for a few minutes.',
'Add a glass of water to the pot and cover.',
'Cook on low heat for about 30 minutes until the leeks are tender.',
'In a bowl, beat 3 eggs with 20cl of crème fraîche.',
'Add the leeks to the bowl and mix.',
'Pour the mixture into a gratin dish.',
'Sprinkle with breadcrumbs and grated cheese.',
'Bake for about 30 minutes until the gratin is golden brown.'
],
'cauliflower couscous': ['Cook the cauliflower like couscous.', 'Sauté vegetables in a pan.', 'Mix the vegetables with the cauliflower.', 'Add spices and water.', 'Simmer until the couscous is cooked.'],
'cauliflower curry': ['Cut the cauliflower into florets.', 'Sauté ginger and garlic in a pan.', 'Add the cauliflower and sauté.', 'Add spices and cream.', 'Simmer until the cauliflower is tender.'],
'cauliflower mash': ['Steam the cauliflower.', 'Blend the cooked cauliflower with cream and butter.', 'Add spices and nutmeg.', 'Reheat the puree in the microwave.', 'Serve hot.'],
'sweet potato fries': ['Peel the sweet potatoes and cut them into fries.', 'Put them in a bowl with olive oil.', 'Add spices and salt.', 'Mix to coat the fries well.', 'Arrange them on a baking sheet and bake in the oven.'],
'sweet potato curry': ['Peel the sweet potatoes and cut them into cubes.', 'Sauté onions in a pan.', 'Add the sweet potatoes and spices.', 'Pour in water and simmer.', 'Serve hot.'],

'sweet potato soup': ['Peel and chop the sweet potatoes.', 'Sauté onions in a saucepan.', 'Add the sweet potatoes and broth.', 'Let simmer until the sweet potatoes are tender.', 'Blend the soup and add cream.'],
'tofu and vegetable stir-fry': ['Cut the tofu into cubes.', 'Sauté vegetables in a frying pan.', 'Add the tofu and sauté.', 'Add spices and tamari.', 'Serve hot.'],
'tofu stir-fry noodles': ['Cook noodles according to instructions.', 'Sauté vegetables and tofu in a frying pan.', 'Add the noodles and spices.', 'Stir-fry everything.', 'Serve hot.'],
'tofu curry': ['Cut the tofu into cubes.', 'Sauté onions in a frying pan.', 'Add the tofu and vegetables.', 'Add coconut milk and spices.', 'Simmer until everything is cooked.'],
'quinoa salad': ['Cook quinoa in salted boiling water for about 15 minutes.', 'Meanwhile, cut cherry tomatoes in half and thinly slice red onion.', 'Prepare the vinaigrette by mixing olive oil, balsamic vinegar, salt, and pepper.', 'Once the quinoa is cooked, rinse it with cold water and drain it.', 'Mix the quinoa with cherry tomatoes, red onion, and vinaigrette.'],
'quinoa curry': ['Cook quinoa in salted boiling water for about 15 minutes.', 'Meanwhile, thinly slice the onion and cube the vegetables.', 'In a frying pan, sauté the onion in olive oil.', 'Add the vegetables and sauté for a few minutes.', 'Add the cooked quinoa and coconut milk, then simmer over low heat for about 10 minutes.'],
'quinoa bowl': ['Cook quinoa in salted boiling water for about 15 minutes.', 'Meanwhile, cube the vegetables.', 'Heat some olive oil in a frying pan and sauté the vegetables for a few minutes.', 'In a bowl, arrange the cooked quinoa, vegetables, and sesame seeds.', 'Serve hot.'],
'spinach curry': ['Heat some olive oil in a frying pan.', 'Add the spinach and sauté until wilted.', 'Add coconut milk, curry, and salt.', 'Simmer over low heat for about 10 minutes.', 'Serve hot.'],
'spinach tart': ['Preheat the oven to 180°C.', 'In a bowl, mix the flour, olive oil, and water until obtaining a dough.', 'Roll out the dough and place it in a pie dish.', 'Sauté the spinach in olive oil for a few minutes.', 'In another bowl, beat the eggs, milk, and salt.'],
'spinach lasagna': ['Preheat the oven to 180°C.', 'In a frying pan, sauté the onion and garlic in olive oil.', 'Add the spinach and sauté until wilted.', 'In a gratin dish, alternate layers of lasagna, tomato sauce, spinach, and béchamel.', 'Bake for about 30 minutes.'],
'bell pepper fajitas': ['Sauté peppers and onion in oil for 5 minutes. Add tomato sauce, cumin, paprika, and coriander. Let simmer for 10 minutes. Warm the tortillas in a frying pan. Fill the tortillas with the mixture.'],
'bell pepper tart': ['Cook the peppers in the oven for 10 minutes at 180°C. Peel and cut them into strips. In a bowl, mix the eggs, sour cream, gruyere cheese, and Provence herbs. Put this mixture in the bell peppers and bake for 25 minutes at 200°C.'],
'stuffed bell peppers': ["Cook the rice. Hollow out the peppers. In a pan, sauté the onion and garlic in oil. Add the cooked rice, herbs of Provence and salt. Stuff the peppers with this mixture. Place them in an oven dish. Bake for 20 minutes at 180°C."],
'roasted celeriac': ["Peel and cut the celeriac into cubes. In a bowl, mix the celeriac cubes with oil, salt, pepper and herbs of Provence. Arrange them on an oven tray. Bake for 25 minutes at 200°C."],
'celeriac soup': ["Peel and cut the celeriac and potatoes into pieces. Slice the onion and garlic. In a pot, sauté the onion and garlic in oil. Add the celeriac and potatoes. Cover with vegetable broth. Let simmer on low heat for 25 minutes. Blend the mixture with the sour cream."],
'celeriac salad': ["Peel and grate the celeriac. Peel and dice the apple. Slice the red onion. Crush the walnuts. In a bowl, mix the celeriac, apple, red onion and walnuts. Prepare a dressing with cider vinegar, oil and salt. Add the dressing to the salad."],
'cumin roasted carrots': ["Peel and cut the carrots into sticks. Arrange them on an oven tray. Mix in a bowl oil, cumin, salt and pepper. Pour this mixture over the carrots. Bake for 25 minutes at 200°C."],
'carrot curry': ["Peel and slice the onion, garlic and ginger. Sauté everything in oil. Add the carrots sliced into rounds and the curry. Mix and add the coconut milk. Let simmer until the carrots are cooked. Add the chickpeas and let simmer for another 5 minutes."],
'carrot tart': ['Preheat the oven to 200°C. Roll out the shortcrust pastry in a pie dish. Peel and grate the carrots. Arrange them on the pastry. In a bowl, beat the eggs with the sour cream and cumin. Pour this mixture over the carrots. Sprinkle with grated gruyere. Bake for 30 minutes.'],
"garlic sautéed green beans": ["Wash and trim the green beans. Cook them for 5 minutes in a pot of salted boiling water. Drain them. In a pan, heat olive oil. Add minced garlic and green beans. Sauté for 5 minutes. Salt and pepper."],
"green bean salad": ["Wash and trim the green beans. Cook them for 5 minutes in a pot of salted boiling water. Drain them and rinse them under cold water. Cut the cherry tomatoes in half. Slice the red onion. In a bowl, mix the green beans, cherry tomatoes and red onion. Add the dressing."],
"green bean gratin": ["Preheat the oven to 200°C. Wash and trim the green beans. Cook them for 5 minutes in a pot of salted boiling water. Drain them. In a pot, heat the sour cream with minced garlic and grated gruyere. Add the green beans and mix. Butter a gratin dish and pour the mixture into it. Bake for 20 minutes."],
"onion soup": ["Peel and chop the onions. Sauté them in a pot with a little olive oil. Add thyme and bay leaves. Pour in the vegetable broth and white wine. Let simmer for 20 minutes. Preheat the oven to 180°C. Cut the baguette into slices and toast them. Pour the soup into oven-safe bowls. Place a slice of toasted bread on top of each bowl and sprinkle with grated Gruyere cheese. Bake for 10 minutes."],
"onion pie": ["Slice the onions and sauté them in a pan with olive oil and thyme.",
  "Unroll the puff pastry and place it in a pie dish.",
  "Poke holes in the bottom of the pastry with a fork.",
  "In a bowl, beat the eggs with the cream.",
  "Add the onions to the mixture and stir.",
  "Pour the mixture over the pastry.",
  "Bake the tart for about 30 minutes at 180°C.",
  "Remove the tart from the oven and let it cool.",
  "Serve the tart cold."
],
"onion pan": ["Slice the onions and sauté them in a pan with olive oil.",
  "Add honey and balsamic vinegar.",
  "Cook over low heat until the onions are very soft.",
  "Serve hot."
],

"guacamole": ["Cut the avocados in half and remove the pit.",
  "Scoop out the flesh of the avocados and put it in a bowl.",
  "Add lime juice and mash the avocado flesh with a fork.",
  "Dice the tomato and add it to the bowl.",
  "Slice the red onion and add it to the bowl.",
  "Chop the cilantro and add it to the bowl.",
  "Salt to taste.",
  "Mix everything until smooth.",
  "Serve chilled."
],

"avocado and mango salad": ["Dice the mango into small pieces.",
  "Cut the avocado in half, remove the pit, and scoop out the flesh with a spoon.",
  "Dice the avocado into small pieces.",
  "Dice the cucumber into small pieces.",
  "Slice the red onion.",
  "Mix all the ingredients in a bowl.",
  "Drizzle with vinaigrette.",
  "Chop the cilantro and add it to the salad.",
  "Salt and pepper to taste.",
  "Serve chilled."
],

"avocado tacos": ["Dice the tomatoes into small pieces.",
  "Slice the red onion.",
  "Chop the cilantro.",
  "Cut the avocados in half, remove the pit, and scoop out the flesh with a spoon.",
  "Mash the avocado flesh with a fork.",
  "Heat the tortillas in a pan or in the oven.",
  "Fill the tortillas with the tomatoes, red onion, cilantro, and avocado flesh.",
  "Drizzle with lime juice.",
  "Salt to taste."
],
"stir-fried tofu with cashews": [
  "Cut the tofu into small cubes.",
  "In a bowl, mix together the soy sauce and honey.",
  "Heat the sesame oil in a pan.",
  "Sauté the onion, garlic, and ginger.",
  "Add the tofu and cashews, then pour in the soy sauce and honey mixture.",
  "Cook until the tofu is golden brown."
],
"vegetable curry with cashews": [
"Heat oil in a large pan.",
"Add onion, garlic, and ginger and sauté until the onion is translucent.",
"Add the vegetables and cook until tender.",
"Add curry powder, coconut milk, and cashew nuts.",
"Stir and simmer for about 10 minutes.",
"Add fresh coriander and salt to taste."
],
"coleslaw cashew nut": [
"Cut the cabbage into thin strips.",
"Grate the carrot and red onion.",
"Mix all the vegetables in a large salad bowl.",
"Add the cashew nuts and dressing.",
"Mix well and serve."
],
"banana ice cream": [
"Peel the bananas and slice them.",
"Blend the bananas with almond milk, vanilla, and honey until smooth.",
"Pour the mixture into an ice cream maker and churn until well set.",
"Transfer the ice cream to a container and place it in the freezer for at least 2 hours."
],
"baked bananas with chocolate": [
  "Preheat the oven to 180°C.",
  "Cut the bananas in half lengthwise.",
  "Melt the dark chocolate in a double boiler.",
  "Place the bananas on a baking sheet lined with parchment paper.",
  "Pour the melted chocolate over the bananas.",
  "Bake for about 10 minutes."
],
"banana bread": [
  "Preheat the oven to 180°C.",
  "Mash the bananas in a bowl.",
  "Add the sugar, eggs, and melted butter.",
  "Mix until smooth.",
  "Add the flour and baking powder.",
  "Mix well.",
  "Pour the mixture into a loaf pan.",
  "Bake for about 50 minutes."
],
"apple pie": [
  "Preheat the oven to 180°C.",
  "Roll out the shortcrust pastry in a tart pan.",
  "Peel, core, and slice the apples thinly.",
  "Arrange the apple slices on the pastry.",
  "Sprinkle with sugar, cinnamon, and diced butter.",
  "Bake for about 40 minutes."
],
"apple compote": [
  "Peel and dice the apples.",
  "In a saucepan, mix the apples, sugar, cinnamon, and water.",
  "Cook over medium heat until the apples are well cooked and the water has evaporated.",
  "Blend the compote until smooth.",
  "Let it cool and serve."
],
"baked caramelized apples": [
  "Preheat the oven to 180°C.",
  "Peel and slice the apples thinly.",
  "Arrange the apple slices in a baking dish.",
  "Sprinkle with sugar and diced butter.",
  "Bake for about 30 minutes, stirring occasionally."
],
"lemon pie": [
  "Preheat the oven to 180°C.",
  "Roll out the shortcrust pastry in a tart pan.",
  "In a bowl, mix the lemon juice and zest, sugar, melted butter, and beaten eggs.",
  "Pour the mixture onto the pastry and bake for about 30 minutes.",
  "Let it cool before serving."
],
"lemon sorbet": [
  "Peel the lemons and blend them with sugar and water.",
  "Pour the mixture into an ice cream maker and churn until creamy.",
  "Put in the freezer for at least 2 hours before serving."
],
"lemon cake": [
  "Preheat the oven to 180°C.",
  "In a bowl, mix the sugar and melted butter.",
  "Add the eggs one by one, mixing well between each addition.",
  "Add the lemon zest and juice, flour, and baking powder.",
  "Pour the mixture into a buttered mold and bake for about 30 minutes."
],
'chocolate brownies': [
  'Melt the butter and dark chocolate in a double boiler.',
  'Add the sugar and mix.',
  'Add the flour and mix.',
  'Add the eggs and mix.',
  'Pour the batter into a buttered mold and bake for about 25 minutes.'
],
'chocolate mousse': [
'Melt dark chocolate in a bain-marie.',
'Separate egg whites from yolks.',
'Beat egg whites until stiff peaks form.',
'Add sugar to the beaten egg whites.',
'Add cream to the melted chocolate and mix.',
'Add egg yolks to the melted chocolate and mix.',
'Gently fold the beaten egg whites into the chocolate mixture.',
'Divide the mousse into glasses and refrigerate for about 2 hours.'
],
'chocolate cake': [
'Melt dark chocolate and butter in a bain-marie.',
'Add sugar and mix.',
'Add flour and mix.',
'Add eggs and mix.',
'Pour the batter into a buttered cake pan and bake for about 30 minutes.'
],
'raspberry tart': [
'Roll out the shortcrust pastry in a buttered tart pan.',
'Prick the pastry base with a fork.',
'Arrange the raspberries on the pastry base.',
'Beat the eggs with the sugar and cream.',
'Pour the mixture over the raspberries.',
'Bake the tart for about 40 minutes.'
],
'raspberry sorbet': [
'Blend the raspberries with sugar and water.',
'Pour the mixture into an ice cream maker and churn for about 30 minutes.'
],
'raspberry clafoutis': [
'Butter an ovenproof dish.',
'Arrange the raspberries in the dish.',
'Beat the eggs with sugar, flour, and vanilla.',
'Add milk and mix.',
'Pour the mixture over the raspberries.',
'Bake the clafoutis for about 30 minutes.'
],
'homemade tomato sauce': [
'Peel and finely chop the onion and garlic.',
'Heat the olive oil in a saucepan and sauté the onion and garlic for about 5 minutes.',
'Add the peeled and seeded tomatoes, sugar, salt, and pepper.',
'Simmer the sauce over low heat for about 30 minutes.',
'Blend the sauce until smooth.'
],
'tomato pie': [
'Preheat the oven to 180°C.',
'Roll out the pastry into a tart dish and prick it with a fork.',
'Spread mustard on the bottom of the tart.',
'Slice the tomatoes and arrange them on the pastry base.',
'Sprinkle with grated cheese and basil.',
'Drizzle with olive oil.',
'Bake the tart for about 30 minutes.'
],
'tomato and mozzarella salad': [
'Slice the tomatoes and mozzarella cheese.',
'Arrange the tomato and mozzarella slices alternately on a plate.',
'Sprinkle with basil leaves.',
'Drizzle with olive oil.',
'Season with salt and pepper.'
],
'mashed potatoes': [
'Peel and chop the potatoes into small pieces.',
'Cook the potatoes in a pot of salted boiling water for about 20 minutes.',
'Drain the potatoes and mash them with a potato masher or a fork.',
'Add butter and milk.',
'Season with salt and pepper.'
],
'sweet potato fries': [
'Preheat the oven to 200°C.',
'Peel the sweet potatoes and cut them into fries.',
'Mix the fries with olive oil, salt, and pepper.',
'Arrange the fries on a baking sheet lined with parchment paper.',
'Bake the fries for about 20 minutes.'
],
'potato and spinach curry': [
'Peel and finely chop the onion and garlic.',
'Heat the olive oil in a frying pan and sauté the onion and garlic for about 5 minutes.',
'Add the peeled and cubed potatoes, coconut milk, and curry.',
'Season with salt and pepper.',
'Cover the frying pan and simmer for about 20 minutes.',
'Add the spinach leaves and cook for about 5 minutes.'
],
'stir-fried rice with vegetables': [
'Cook the rice according to package instructions.',
'Peel and dice the carrots.',
'Wash and dice the bell pepper.',
'Peel and mince the onion and garlic.',
'Heat the olive oil in a pan.',
'Sauté the onion and garlic for a few minutes.',
'Add the carrots and bell pepper to the pan and cook for about 10 minutes.',
'Add the cooked rice to the pan.',
'Add soy sauce, salt, and pepper.',
'Mix everything together and cook for a few minutes.',
'Serve hot.'
],
'rice with vegetable milk': [
'Cook the rice according to package instructions.',
'In a saucepan, mix the plant-based milk, sugar, and vanilla.',
'Add the cooked rice to the saucepan.',
'Cook over low heat, stirring regularly, for about 30 minutes.',
'Remove from heat and let cool.',
'Serve cold.'
],
'rice bowl with black beans': [
'Cook the rice according to package instructions.',
'Sauté the onion and red bell pepper in olive oil.',
'Add the drained black beans and cook for a few minutes.',
'Mix the cooked rice with the black beans, onion, and red bell pepper.',
'Season with salt and pepper, and add chopped fresh cilantro before serving.'
],
'spaghetti with garlic and olive oil': [
'Cook the spaghetti according to package instructions.',
'Heat the olive oil in a pan and sauté the garlic and red pepper.',
'Add the cooked spaghetti to the pan and mix.',
'Add chopped fresh parsley and grated Parmesan cheese.',
'Season with salt and pepper before serving.'
],
'vegetable lasagne': [
'Cook the lasagna noodles according to package instructions.',
'Heat olive oil in a pan and sauté the onion and garlic.',
'Add the diced vegetables (spinach, carrot, celery, zucchini) and cook for about 10 minutes.',
'Add the crushed tomatoes and chopped basil, and simmer for about 20 minutes.',
'In a baking dish, alternate layers of lasagna noodles, vegetables, and ricotta cheese until all ingredients are used.',
'Sprinkle with grated cheese and bake for about 30 minutes.'
],
'pasta salad with grilled vegetables': [
'Cook the pasta according to package instructions.',
'Cut the vegetables into pieces and grill them in a pan with olive oil and garlic.',
'Mix the cooked pasta with the grilled vegetables and halved cherry tomatoes.',
'Prepare a dressing by mixing olive oil, lemon juice, chopped parsley, salt, and pepper.',
'Drizzle the pasta salad with the dressing and serve.'
],
'mushroom omelette': [
'Heat olive oil in a pan.',
'Add sliced mushrooms and cook until golden brown.',
'Add chopped onion and garlic and cook for 1 minute.',
'Beat eggs for omelette and add mushroom mixture.',
'Cook omelette for about 3 minutes on each side.'
],
'spinach quiche': [
'Preheat oven to 180°C.',
'Spread the pastry in a buttered tart mold.',
'Cook spinach in a pan with chopped onion and garlic.',
'Beat eggs for omelette with cream, grated cheese, salt, and pepper.',
'Add the spinach mixture and pour over the pastry.',
'Bake the quiche for about 35 minutes.'
],
'huevos rancheros': [
'Heat olive oil in a pan.',
'Add chopped onion and garlic and cook until golden brown.',
'Add red beans, crushed tomatoes, coriander, red pepper, salt, and pepper.',
'Simmer for about 10 minutes.',
'Heat tortillas in a pan.',
'Cook eggs sunny side up.',
'Serve red beans on tortillas, garnished with a sunny side up egg.'
],
'cheese pizza': [
'Preheat oven to 220°C.',
'Spread the pizza dough on a baking sheet.',
'Spread tomato sauce on the dough.',
'Cover with grated cheese and slices of mozzarella.',
'Drizzle with olive oil and season with salt and pepper.',
'Bake the pizza for about 15 minutes.'
],
'cheese fondue': [
'Rub the bottom of the fondue pot with a clove of garlic.',
'Pour white wine into the fondue pot and heat.',
'Add the cheese and stir until melted.',
'Add kirsch and stir.',
'Dip pieces of bread in the fondue.'
],
'macaroni and cheese': [
'Cook macaroni according to package instructions.',
'Melt butter in a saucepan.',
'Add flour and stir.',
'Add milk and stir until the sauce thickens.',
'Add grated cheese, mustard, salt, and pepper.',
'Mix the sauce with the cooked macaroni.'
]
  };

  if (recipes.hasOwnProperty(recipeName)) {
    return recipes[recipeName];
  } else {
    return "Recette introuvable";
  }
}