function getRecipesByIngredient(ingredient) {
  const recipes = {
  "lentilles": ["dahl aux lentilles", "salade de lentilles", "biryani aux lentilles"],
  "pois chiches": ["houmous", "falafels", "curry de pois chiches"],
  "aubergines": ["moussaka végétarienne", "caviar d'aubergines", "ratatouille"],
  "champignons": ["risotto aux champignons", "tartines aux champignons", "quiche aux champignons"],
  "courgettes": ["spaghetti de courgettes", "flans de courgettes", "ratatouille"],
  "brocoli": ["salade de brocoli", "tartes aux brocolis", "pâtes aux brocolis"],
  "poireaux": ["tarte aux poireaux", "fondue de poireaux", "gratin de poireaux"],
  "chou-fleur": ["couscous de chou-fleur", "curry de chou-fleur", "purée de chou-fleur"],
  "patates douces": ["frites de patates douces", "curry de patates douces", "soupe de patates douces"],
  "tofu": ["sauté de tofu et légumes", "nouilles sautées au tofu", "curry de tofu"],
  "quinoa": ["salade de quinoa", "curry de quinoa", "bowl de quinoa"],
  "épinards": ["curry d'épinards", "tarte aux épinards", "lasagne aux épinards"],
  "poivrons": ["fajitas aux poivrons", "tarte aux poivrons", "poivrons farcis"],
  "céleri-rave": ["céleri-rave rôti", "velouté de céleri-rave", "salade de céleri-rave"],
  "carottes": ["carottes rôties au cumin", "curry de carottes", "tarte aux carottes"],
  "haricots verts": ["haricots verts sautés à l'ail", "salade de haricots verts", "gratin de haricots verts"],
  "oignons": ["soupe à l'oignon", "tarte aux oignons", "poêlée d'oignons"],
  "avocat": ["guacamole", "salade d'avocat et de mangue", "tacos à l'avocat"],
  "noix de cajou": ["tofu sauté aux noix de cajou", "curry de légumes aux noix de cajou", "salade de chou aux noix de cajou"],
  "bananes": ["crème glacée à la banane", "bananes cuites au four avec du chocolat", "pain à la banane"],
  "pommes": ["tarte aux pommes", "compote de pommes", "pommes caramélisées au four"],
  "citrons": ["tarte au citron", "sorbet au citron", "gâteau au citron"],
  "chocolat": ["brownies au chocolat", "mousse au chocolat", "gâteau au chocolat"],
  "framboises": ["tarte aux framboises", "sorbet aux framboises", "clafoutis aux framboises"],
  "tomates": ["sauce tomate maison", "tarte à la tomate", "salade de tomates et mozzarella"],
  "pommes de terre": ["purée de pommes de terre", "frites de patates douces", "curry de pommes de terre et épinards"],
  "riz": ["riz sauté aux légumes", "riz au lait végétal", "bol de riz aux haricots noirs"],
  "pâtes": ["spaghetti à l'ail et à l'huile d'olive", "lasagne aux légumes", "salade de pâtes et légumes grillés"],
  "oeufs": ["omelette aux champignons", "quiche aux épinards", "huevos rancheros"],
  "fromage": ["pizza au fromage", "fondue de fromage", "macaroni au fromage"]
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
  'dahl aux lentilles': ['lentilles', 'oignons', 'ail', 'gingembre', 'curry en poudre', 'tomates en dés', 'lait de coco', 'coriandre'],
  'salade de lentilles': ['lentilles', 'tomates', 'oignons rouges', 'concombre', 'feta', 'menthe'],
  'biryani aux lentilles': ['lentilles', 'oignons', 'ail', 'gingembre', 'tomates', 'curry en poudre', 'coriandre', 'cardamome', 'cannelle', 'cumin', 'riz basmati'],
  'houmous': ['pois chiches', 'tahini', 'jus de citron', 'ail', 'huile d olive', 'paprika'],
  'falafels': ['pois chiches', 'oignons', 'ail', 'coriandre', 'cumin', 'farine', 'levure chimique'],
  'curry de pois chiches': ['pois chiches', 'oignons', 'ail', 'gingembre', 'curry en poudre', 'tomates en dés', 'lait de coco', 'coriandre'],
  'moussaka végétarienne': ['aubergines', 'pommes de terre', 'oignons', 'ail', 'coulis de tomate', 'lait', 'farine', 'fromage râpé'],
  "caviar d'aubergines": ['aubergines', 'ail', 'jus de citron', 'tahini', 'huile d olive', 'cumin'],
  'ratatouille': ['aubergines', 'courgettes', 'poivrons', 'oignons', 'ail', 'coulis de tomate', 'thym', 'persil'],
  'risotto aux champignons': ['riz arborio', 'champignons', 'oignons', 'ail', 'bouillon de légumes', 'parmesan', 'beurre'],
  'tartines aux champignons': ['champignons', 'ail', 'persil', 'pain de campagne', 'fromage frais'],
  'quiche aux champignons': ['pâte feuilletée', 'champignons', 'oignons', 'ail', 'crème fraîche', 'œufs', 'fromage râpé'],
  'spaghetti de courgettes': ['courgettes', 'ail', 'huile d olive', 'tomates cerises', 'basilic', 'parmesan'],
  'flans de courgettes': ['courgettes', 'oignons', 'ail', 'œufs', 'crème fraîche', 'fromage râpé'],
  'salade de brocoli': ['brocoli', 'oignons rouges', 'raisins secs', 'noix', 'vinaigrette'],
  'tartes aux brocolis': ['pâte feuilletée', 'brocoli', 'oignons', 'ail', 'crème fraîche', 'œufs', 'fromage râpé'],
'pâtes aux brocolis': ['pâtes', 'brocolis', 'huile d\'olive', 'ail', 'parmesan'],
    'tarte aux poireaux': ['pâte feuilletée', 'poireaux', 'crème fraîche', 'œufs', 'fromage râpé'],
    'fondue de poireaux': ['poireaux', 'beurre', 'crème fraîche', 'fromage râpé'],
    'gratin de poireaux': ['poireaux', 'beurre', 'farine', 'lait', 'fromage râpé'],
    'couscous de chou-fleur': ['chou-fleur', 'huile d\'olive', 'cumin', 'coriandre', 'oignon', 'raisins secs'],
    'curry de chou-fleur': ['chou-fleur', 'huile d\'olive', 'oignon', 'ail', 'gingembre', 'curry', 'lait de coco'],
    'purée de chou-fleur': ['chou-fleur', 'pommes de terre', 'beurre', 'lait'],
    'frites de patates douces': ['patates douces', 'huile d\'olive', 'paprika', 'sel'],
    'curry de patates douces': ['patates douces', 'oignon', 'ail', 'gingembre', 'curry', 'lait de coco'],
    'soupe de patates douces': ['patates douces', 'oignon', 'ail', 'gingembre', 'bouillon de légumes', 'lait de coco'],
    'sauté de tofu et légumes': ['tofu', 'légumes (carottes, poivrons, courgettes)', 'sauce soja', 'huile d\'olive', 'ail'],
    'nouilles sautées au tofu': ['nouilles', 'tofu', 'sauce soja', 'ail', 'oignon', 'huile'],
    'curry de tofu': ['tofu', 'lait de coco', 'curry', 'oignon', 'ail', 'gingembre', 'huile', 'coriandre'],
    'salade de quinoa': ['quinoa', 'concombre', 'tomate', 'poivron', 'oignon rouge', 'feta', 'menthe', 'persil', 'citron', 'huile'],
    'curry de quinoa': ['quinoa', 'lait de coco', 'curry', 'pois chiches', 'épinards', 'oignon', 'ail', 'gingembre', 'huile'],
    'bowl de quinoa': ['quinoa', 'pois chiches', 'concombre', 'carotte', 'avocat', 'feta', 'menthe', 'persil', 'citron', 'huile'],
    "curry d'épinards": ['épinards', 'lait de coco', 'curry', 'pois chiches', 'oignon', 'ail', 'gingembre', 'huile'],
    'tarte aux épinards': ['pâte brisée', 'épinards', 'oignon', 'ail', 'œufs', 'crème fraîche', 'gruyère', 'noix de muscade'],
    'lasagne aux épinards': ['lasagnes', 'épinards', 'oignon', 'ail', 'béchamel', 'gruyère', 'huile'],
    'fajitas aux poivrons': ['tortillas', 'poivrons', 'oignon', 'sauce tomate', 'cumin', 'paprika', 'coriandre', 'huile'],
    'tarte aux poivrons': ['pâte brisée', 'poivrons', 'œufs', 'crème fraîche', 'gruyère', 'herbes de Provence'],
    'poivrons farcis': ['poivrons', 'riz', 'oignon', 'ail', 'herbes de Provence', 'huile'],
    'céleri-rave rôti': ['céleri-rave', 'huile', 'sel', 'poivre', 'herbes de Provence'],
    'velouté de céleri-rave': ['céleri-rave', 'pommes de terre', 'oignon', 'ail', 'bouillon de légumes', 'crème fraîche', 'huile'],
    'salade de céleri-rave': ['céleri-rave', 'pomme', 'oignon rouge', 'noix', 'vinaigre de cidre', 'huile'],
    'carottes rôties au cumin': ['carottes', 'cumin', 'huile', 'sel', 'poivre'],
    'curry de carottes': ['carottes', 'lait de coco', 'curry', 'pois chiches', 'oignon', 'ail', 'gingembre', 'huile'],
    'tarte aux carottes': ['pâte brisée', 'carottes', 'œufs', 'crème fraîche', 'gruyère', 'cumin'],
"haricots verts sautés à l'ail": ["haricots verts", "ail", "huile d'olive", "sel", "poivre"],
    "salade de haricots verts": ["haricots verts", "tomates cerises", "oignon rouge", "vinaigrette"],
    "gratin de haricots verts": ["haricots verts", "crème fraîche", "gruyère râpé", "ail", "beurre", "sel", "poivre"],
    "soupe à l'oignon": ["oignons", "bouillon de légumes", "vin blanc", "thym", "laurier", "gruyère râpé", "baguette"],
    "tarte aux oignons": ["pâte feuilletée", "oignons", "crème fraîche", "œufs", "beurre", "huile d'olive", "thym", "sel", "poivre"],
    "poêlée d'oignons": ["oignons", "huile d'olive", "miel", "vinaigre balsamique"],
    "guacamole": ["avocats", "citron vert", "tomate", "oignon rouge", "coriandre", "sel"],
    "salade d'avocat et de mangue": ["mangue", "avocat", "concombre", "oignon rouge", "coriandre", "vinaigrette"],
    "tacos à l'avocat": ["avocats", "tortillas", "maïs", "tomates", "oignon rouge", "coriandre", "citron vert"],
    "tofu sauté aux noix de cajou": ["tofu", "noix de cajou", "oignon", "ail", "gingembre", "sauce soja", "miel", "huile de sésame"],
    "curry de légumes aux noix de cajou": ["légumes variés", "noix de cajou", "oignon", "ail", "gingembre", "curry en poudre", "lait de coco", "coriandre", "sel"],
    "salade de chou aux noix de cajou": ["chou blanc", "carotte", "oignon rouge", "noix de cajou", "vinaigrette"],
    "crème glacée à la banane": ["bananes", "lait d'amande", "vanille", "miel"],
    "bananes cuites au four avec du chocolat": ["bananes", "chocolat noir"],
    "pain à la banane": ["bananes", "farine", "sucre", "œufs", "beurre", "levure chimique"],
    "tarte aux pommes": ["pâte brisée", "pommes", "sucre", "beurre", "cannelle"],
    "compote de pommes": ["pommes", "sucre", "cannelle", "eau"],
'pommes caramélisées au four': ['pommes', 'sucre', 'beurre'],
    'tarte au citron': ['pâte brisée', 'citrons', 'sucre', 'beurre', 'œufs'],
    'sorbet au citron': ['citrons', 'sucre', 'eau'],
    'gâteau au citron': ['farine', 'sucre', 'beurre', 'œufs', 'citrons', 'levure'],
    'brownies au chocolat': ['beurre', 'chocolat noir', 'sucre', 'farine', 'œufs'],
    'mousse au chocolat': ['chocolat noir', 'œufs', 'sucre', 'crème fraîche'],
    'gâteau au chocolat': ['chocolat noir', 'beurre', 'sucre', 'farine', 'œufs'],
    'tarte aux framboises': ['pâte sablée', 'framboises', 'sucre', 'œufs', 'crème fraîche'],
'sorbet aux framboises': ['framboises', 'sucre', 'eau'],
            'clafoutis aux framboises': ['framboises', 'sucre', 'farine', 'œufs', 'lait', 'vanille'],
            'sauce tomate maison': ['tomates', 'oignon', 'ail', 'huile d\'olive', 'sucre', 'sel', 'poivre'],
            'tarte à la tomate': ['pâte brisée', 'tomates', 'moutarde', 'fromage râpé', 'huile d\'olive', 'basilic'],
            'salade de tomates et mozzarella': ['tomates', 'mozzarella', 'huile d\'olive', 'basilic', 'sel', 'poivre'],
            'purée de pommes de terre': ['pommes de terre', 'beurre', 'lait', 'sel', 'poivre'],
            'frites de patates douces': ['patates douces', 'huile d\'olive', 'sel', 'poivre'],
            'curry de pommes de terre et épinards': ['pommes de terre', 'épinards', 'oignon', 'ail', 'lait de coco', 'curry', 'huile d\'olive', 'sel', 'poivre'],
            'riz sauté aux légumes': ['riz', 'carotte', 'poivron', 'oignon', 'ail', 'huile d\'olive', 'sauce soja', 'sel', 'poivre'],
            'riz au lait végétal': ['riz rond', 'lait végétal', 'sucre', 'vanille'],
            'bol de riz aux haricots noirs': ['riz', 'haricots noirs', 'poivron rouge', 'oignon', 'coriandre', 'huile d\'olive', 'sel', 'poivre'],
            "spaghetti à l'ail et à l'huile d'olive": ['spaghetti', 'ail', 'huile d\'olive', 'piment rouge', 'persil', 'parmesan', 'sel', 'poivre'],
            'lasagne aux légumes': ['lasagne', 'épinards', 'carotte', 'céleri', 'courgette', 'oignon', 'ail', 'tomates concassées', 'ricotta', 'fromage râpé', 'huile d\'olive', 'basilic', 'sel', 'poivre'],
            'salade de pâtes et légumes grillés': ['pâtes', 'aubergine', 'courgette', 'poivron rouge', 'oignon rouge', 'tomates cerises', 'ail', 'huile d\'olive', 'jus de citron', 'persil', 'sel', 'poivre'],
            'omelette aux champignons': ['œufs', 'champignons', 'oignon', 'ail', 'persil', 'huile d\'olive', 'beurre', 'sel', 'poivre'],
            'quiche aux épinards': ['pâte brisée', 'épinards', 'oignon', 'ail', 'œufs', 'crème fraîche', 'fromage râpé', 'huile d\'olive', 'sel', 'poivre'],
            'huevos rancheros': ['tortillas', 'haricots rouges', 'tomates concassées', 'oignon', 'ail', 'coriandre', 'piment rouge', 'œufs', 'huile d\'olive', 'sel', 'poivre'],
            'pizza au fromage': ['pâte à pizza', 'sauce tomate', 'fromage râpé', 'mozzarella', 'huile d\'olive', 'sel', 'poivre'],
            'fondue de fromage': ['fromage à fondue', 'pain', 'ail', 'vin blanc', 'kirsch'],
            'macaroni au fromage': ['macaroni', 'beurre', 'farine', 'lait', 'fromage râpé', 'moutarde', 'sel', 'poivre']

  };
  
  if (recipes.hasOwnProperty(recipeName)) {
    return recipes[recipeName];
  } else {
    return [];
  }
}

function getTimeByRecipe(recipeName) {
  const recipes = {
'dahl aux lentilles': '40 minutes',
    'salade de lentilles': '20 minutes',
    'biryani aux lentilles': '60 minutes',
    'houmous': '15 minutes',
    'falafels': '30 minutes',
    'curry de pois chiches': '40 minutes',
    'moussaka végétarienne': '60 minutes',
    "caviar d'aubergines": '40 minutes',
    'ratatouille': '50 minutes',
    'risotto aux champignons': '40 minutes',
    'tartines aux champignons': '15 minutes',
    'quiche aux champignons': '60 minutes',
    'spaghetti de courgettes': '30 minutes',
    'flans de courgettes': '45 minutes',
    'salade de brocoli': '20 minutes',
    'tartes aux brocolis': '50 minutes',
    'pâtes aux brocolis': '25 minutes',
    'tarte aux poireaux': '60 minutes',
    'fondue de poireaux': '30 minutes',
    'gratin de poireaux': '60 minutes',
    'couscous de chou-fleur': '30 minutes',
    'curry de chou-fleur': '40 minutes',
    'purée de chou-fleur': '30 minutes',
    'frites de patates douces': '30 minutes',
    'curry de patates douces': '40 minutes',
    'soupe de patates douces': '40 minutes',
    'sauté de tofu et légumes': '30 minutes',
    'nouilles sautées au tofu': '25 minutes',
    'curry de tofu': '35 minutes',
    'salade de quinoa': '25 minutes',
    'curry de quinoa': '30 minutes',
    'bowl de quinoa': '25 minutes',
    "curry d'épinards": '30 minutes',
    'tarte aux épinards': '50 minutes',
    'lasagne aux épinards': '60 minutes',
    'fajitas aux poivrons': '30 minutes',
    'tarte aux poivrons': '60 minutes',
    'poivrons farcis': '60 minutes',
    'céleri-rave rôti': '40 minutes',
    'velouté de céleri-rave': '40 minutes',
    'salade de céleri-rave': '20 minutes',
    'carottes rôties au cumin': '35 minutes',
    'curry de carottes': '40 minutes',
    'tarte aux carottes': '60 minutes',
    "haricots verts sautés à l'ail": '20 minutes',
    'salade de haricots verts': '20 minutes',
    'gratin de haricots verts': '40 minutes',
    "soupe à l'oignon": '60 minutes',
    'tarte aux oignons': '60 minutes',
    "poêlée d'oignons": '30 minutes',
    'guacamole': '15 minutes',
    "salade d'avocat et de mangue": '20 minutes',
    "tacos à l'avocat": '25 minutes',
    'tofu sauté aux noix de cajou': '25 minutes',
    'curry de légumes aux noix de cajou': '45 minutes',
    'salade de chou aux noix de cajou': '20 minutes',
    'crème glacée à la banane': '10 minutes',
    'bananes cuites au four avec du chocolat': '20 minutes',
    'pain à la banane': '1 heure',
    'tarte aux pommes': '1 heure',
    'compote de pommes': '30 minutes',
    'pommes caramélisées au four': '25 minutes',
    'tarte au citron': '1 heure',
    'sorbet au citron': '20 minutes',
    'gâteau au citron': '1 heure',
    'brownies au chocolat': '40 minutes',
    'mousse au chocolat': '20 minutes',
    'gâteau au chocolat': '1 heure',
    'tarte aux framboises': '1 heure',
    'sorbet aux framboises': '20 minutes',
    'clafoutis aux framboises': '45 minutes',
    'sauce tomate maison': '2 heures',
    'tarte à la tomate': '1 heure',
    'salade de tomates et mozzarella': '15 minutes',
    'purée de pommes de terre': '30 minutes',
    'frites de patates douces': '40 minutes',
    'curry de pommes de terre et épinards': '50 minutes',
    'riz sauté aux légumes': '30 minutes',
    'riz au lait végétal': '45 minutes',
    'bol de riz aux haricots noirs': '30 minutes',
    "spaghetti à l'ail et à l'huile d'olive": '20 minutes',
    'lasagne aux légumes': '1 heure 30 minutes',
    'salade de pâtes et légumes grillés': '30 minutes',
    'omelette aux champignons': '15 minutes',
    'quiche aux épinards': '1 heure',
    'huevos rancheros': '30 minutes',
    'pizza au fromage': '45 minutes',
    'fondue de fromage': '30 minutes',
    'macaroni au fromage': '30 minutes'
  };

  if (recipes.hasOwnProperty(recipeName)) {
    return recipes[recipeName];
  } else {
    return "Recette introuvable";
  }
}

function getInstructionsByRecipe(recipeName) {
  const recipes = {
'dahl aux lentilles': ['Faire tremper les lentilles dans de l\'eau pendant 1h.', 'Faire revenir les oignons et l\'ail dans de l\'huile.', 'Ajouter les épices et les lentilles égouttées.', 'Verser de l\'eau et laisser mijoter pendant 30 minutes.'],
    'salade de lentilles': ['Faire cuire les lentilles dans de l\'eau bouillante salée.', 'Égoutter les lentilles et les laisser refroidir.', 'Mélanger les lentilles avec des tomates, du concombre, de l\'oignon rouge et de la coriandre.', 'Assaisonner avec de l\'huile d\'olive et du jus de citron.'],
    'biryani aux lentilles': ['Faire cuire le riz dans de l\'eau bouillante salée.', 'Faire revenir les oignons et l\'ail dans de l\'huile.', 'Ajouter les épices et les lentilles préalablement cuites.', 'Incorporer le riz et laisser mijoter pendant 10 minutes.'],
    'houmous': ['Mixer des pois chiches cuits avec de l\'ail, du jus de citron, du tahini et de l\'huile d\'olive.', 'Ajouter de l\'eau pour obtenir la consistance souhaitée.', 'Servir avec du pain pita ou des légumes croquants.'],
    'falafels': ['Mixer des pois chiches cuits avec de l\'ail, des oignons, de la coriandre, du cumin et de la farine.', 'Former des boules et les faire frire dans de l\'huile.', 'Servir chaud avec de la sauce au yaourt ou du houmous.'],
    'curry de pois chiches': ['Faire revenir les oignons et l\'ail dans de l\'huile.', 'Ajouter les épices et les pois chiches égouttés.', 'Incorporer du lait de coco et laisser mijoter pendant 10 minutes.'],
    'moussaka végétarienne': ['Couper des aubergines et des courgettes en tranches et les faire griller.', 'Faire revenir des oignons et de l\'ail dans de l\'huile.', 'Ajouter des tomates en dés, du concentré de tomates, des épices et des lentilles préalablement cuites.', 'Disposer les légumes grillés et la préparation de lentilles dans un plat allant au four.', 'Recouvrir de béchamel et enfourner pendant 30 minutes.'],
    "caviar d'aubergines": ['Couper des aubergines en deux et les faire cuire au four.', 'Récupérer la chair des aubergines et la mixer avec de l\'ail, du jus de citron, du tahini et de l\'huile d\'olive.', 'Servir frais avec du pain pita ou des légumes croquants.'],

   };

  if (recipes.hasOwnProperty(recipeName)) {
    return recipes[recipeName];
  } else {
    return "Recette introuvable";
  }
}
