function getRecipesByIngredient(ingredient) {
  const recipes = {
    "lentilles": ["un dahl aux lentilles", "une salade de lentilles", "un biryani aux lentilles"],
  "pois chiches": ["du houmous", "des falafels", "un curry de pois chiches"],
  "aubergines": ["une moussaka végétarienne", "du caviar d'aubergines", "une ratatouille"],
  "champignons": ["un risotto aux champignons", "des tartines aux champignons", "une quiche aux champignons"],
"courgettes": ["des spaghetti de courgettes", "des flans de courgettes", "une ratatouille"],
"brocoli": ["une salade de brocoli", "des tartes aux brocolis", "des pâtes aux brocolis"],
"poireaux": ["une tarte aux poireaux", "une fondue de poireaux", "un gratin de poireaux"],
"chou-fleur": ["un couscous de chou-fleur", "un curry de chou-fleur", "une purée de chou-fleur"],
"patates douces": ["des frites de patates douces", "un curry de patates douces", "une soupe de patates douces"],
"tofu": ["un sauté de tofu et légumes", "des nouilles sautées au tofu", "un curry de tofu"],
"quinoa": ["une salade de quinoa", "un curry de quinoa", "un bowl de quinoa"],
"épinards": ["un curry d'épinards", "une tarte aux épinards", "une lasagne aux épinards"],
"poivrons": ["des fajitas aux poivrons", "une tarte aux poivrons", "des poivrons farcis"],
"céleri-rave": ["du céleri-rave rôti", "un velouté de céleri-rave", "une salade de céleri-rave"],
"carottes": ["des carottes rôties au cumin", "un curry de carottes", "une tarte aux carottes"],
"haricots verts": ["des haricots verts sautés à l'ail", "une salade de haricots verts", "un gratin de haricots verts"],
"oignons": ["une soupe à l'oignon", "une tarte aux oignons", "une poêlée d'oignons"],
"avocat": ["du guacamole", "une salade d'avocat et de mangue", "des tacos à l'avocat"],
"noix de cajou": ["un sauté de tofu aux noix de cajou", "un curry de légumes aux noix de cajou", "une salade de chou aux noix de cajou"],
"bananes": ["de la crème glacée à la banane", "des bananes cuites au four avec du chocolat", "du pain à la banane"],
"pommes": ["une tarte aux pommes", "de la compote de pommes", "des pommes caramélisées au four"],
"citrons": ["une tarte au citron", "du sorbet au citron", "un gâteau au citron"],
"chocolat": ["des brownies au chocolat", "de la mousse au chocolat", "un gâteau au chocolat"],
"framboises": ["une tarte aux framboises", "du sorbet aux framboises", "un clafoutis aux framboises"],
"tomates": ["de la sauce tomate maison", "une tarte à la tomate", "une salade de tomates et mozzarella"],
"tomates": ["de la sauce tomate maison", "une tarte à la tomate", "une salade de tomates et de mozzarella"],
"pommes de terre": ["de la purée de pommes de terre", "des frites de patates douces", "un curry de pommes de terre et d'épinards"],
"riz": ["du riz sauté aux légumes", "du riz au lait végétal", "un bol de riz aux haricots noirs"],
"pâtes": ["des spaghetti à l'ail et à l'huile d'olive", "des lasagnes aux légumes", "une salade de pâtes et de légumes grillés"],
"oeufs": ["une omelette aux champignons", "une quiche aux épinards", "des huevos rancheros"],
"fromage": ["une pizza au fromage", "une fondue de fromage", "des macaronis au fromage"]
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
    'dahl aux lentilles': ['Cuire les lentilles dans une grande casserole d\'eau bouillante jusqu\'à ce qu\'elles soient tendres. Dans une grande poêle, faire chauffer un peu d\'huile à feu moyen-élevé. Ajouter les oignons et faire revenir pendant environ 5 minutes, jusqu\'à ce qu\'ils soient tendres et légèrement dorés. Ajouter l\'ail, le gingembre et le curry en poudre et faire cuire pendant 1-2 minutes, jusqu\'à ce qu\'il soit parfumé. Ajouter les tomates et faire cuire pendant 5 minutes de plus, en remuant de temps en temps. Ajouter les lentilles et le lait de coco, puis porter à ébullition. Réduire le feu et laisser mijoter pendant environ 10 minutes, jusqu\'à ce que la sauce ait épaissi. Saler et poivrer au goût. Garnir de coriandre fraîche.'],
    'salade de lentilles': ['Cuire les lentilles dans une grande casserole d\'eau bouillante jusqu\'à ce qu\'elles soient tendres. Égoutter et rincer sous l\'eau froide. Dans un grand bol, mélanger les lentilles cuites, les tomates, les oignons rouges, le concombre, la feta et la menthe. Arroser de vinaigrette et bien mélanger.'],
    'biryani aux lentilles': ['Faire chauffer un peu d\'huile dans une grande poêle à feu moyen-élevé. Ajouter les oignons et faire revenir pendant environ 5 minutes, jusqu\'à ce qu\'ils soient tendres et légèrement dorés. Ajouter l\'ail, le gingembre et le curry en poudre et faire cuire pendant 1-2 minutes, jusqu\'à ce qu\'il soit parfumé. Ajouter les tomates et faire cuire pendant 5 minutes de plus, en remuant de temps en temps. Ajouter les lentilles cuites, la cardamome, la cannelle et le cumin, puis bien mélanger. Dans une autre grande casserole, porter une grande quantité d\'eau à ébullition. Ajouter le riz et cuire pendant environ 10 minutes, jusqu\'à ce qu\'il soit tendre mais encore légèrement ferme. Égoutter le riz et le remettre dans la casserole. Ajouter le mélange de lentilles et bien mélanger. Garnir de coriandre fraîche.'],
    'houmous': ['Dans un robot culinaire, mélanger les pois chiches, le tahini, le jus de citron, l\'ail, l\'huile d\'olive et le paprika jusqu\'à ce que le mélange soit lisse. Ajouter un peu d\'eau pour obtenir la consistance désirée.'],
'falafels': ['Mixer des pois chiches cuits avec de l\'ail, des oignons, de la coriandre, du cumin et de la farine.', 'Former des boules et les faire frire dans de l\'huile.', 'Servir chaud avec de la sauce au yaourt ou du houmous.'],
    'curry de pois chiches': ['Faire revenir les oignons et l\'ail dans de l\'huile.', 'Ajouter les épices et les pois chiches égouttés.', 'Incorporer du lait de coco et laisser mijoter pendant 10 minutes.'],
    'moussaka végétarienne': ['Couper des aubergines et des courgettes en tranches et les faire griller.', 'Faire revenir des oignons et de l\'ail dans de l\'huile.', 'Ajouter des tomates en dés, du concentré de tomates, des épices et des lentilles préalablement cuites.', 'Disposer les légumes grillés et la préparation de lentilles dans un plat allant au four.', 'Recouvrir de béchamel et enfourner pendant 30 minutes.'],
    "caviar d'aubergines": ['Couper des aubergines en deux et les faire cuire au four.', 'Récupérer la chair des aubergines et la mixer avec de l\'ail, du jus de citron, du tahini et de l\'huile d\'olive.', 'Servir frais avec du pain pita ou des légumes croquants.'],
'ratatouille': ['Couper les légumes en dés.', 'Faire revenir les légumes dans de l\'huile d\'olive.', 'Ajouter du thym et de l\'ail.', 'Laisser mijoter pendant 20-30 minutes.'],
    'risotto aux champignons': ['Faire chauffer du bouillon de légumes.', 'Faire revenir des champignons dans une poêle.', 'Ajouter de l\'oignon et de l\'ail.', 'Ajouter du riz et faire cuire en remuant jusqu\'à ce qu\'il devienne translucide.', 'Ajouter une louche de bouillon et remuer jusqu\'à absorption.', 'Continuer jusqu\'à ce que le riz soit cuit.', 'Ajouter du fromage râpé et du beurre.', 'Saler et poivrer.'],
    'tartines aux champignons': ['Faire griller du pain de campagne.', 'Faire revenir des champignons dans de l\'huile d\'olive.', 'Ajouter de l\'ail et du persil.', 'Disposer les champignons sur les tranches de pain grillé.', 'Ajouter du fromage râpé.', 'Passer au four jusqu\'à ce que le fromage soit fondu.'],
    'quiche aux champignons': ['Préchauffer le four à 180°C.', 'Faire cuire une pâte brisée.', 'Faire revenir des champignons dans de l\'huile d\'olive.', 'Disposer les champignons sur la pâte.', 'Battre des oeufs avec de la crème fraîche.', 'Verser le mélange sur les champignons.', 'Ajouter du fromage râpé.', 'Enfourner pour 30 minutes.'],
    'spaghetti de courgettes': ['Faire des spaghettis de courgettes avec un spiraliseur.', 'Faire revenir des tomates cerises dans de l\'huile d\'olive.', 'Ajouter de l\'ail et des herbes de Provence.', 'Ajouter les spaghettis de courgettes et faire revenir pendant quelques minutes.', 'Ajouter du fromage râpé.', 'Saler et poivrer.'],
    'flans de courgettes': ['Préchauffer le four à 180°C.', 'Faire cuire des courgettes coupées en dés dans de l\'huile d\'olive.', 'Battre des oeufs avec de la crème fraîche.', 'Mélanger les courgettes avec le mélange d\'oeufs.', 'Verser le mélange dans des ramequins.', 'Enfourner pour 20-25 minutes.'],
    'salade de brocoli': ['Faire cuire des fleurettes de brocoli à la vapeur.', 'Mélanger les fleurettes avec des tomates cerises et des oignons rouges.', 'Ajouter de la vinaigrette.'],
    'tartes aux brocolis': ['Préchauffer le four à 180°C.', 'Faire cuire des fleurettes de brocoli à la vapeur.', 'Disposer les fleurettes sur une pâte brisée.', 'Battre des oeufs avec de la crème fraîche.', 'Verser le mélange sur la pâte et enfourner pendant 30 minutes à 180 degrés.'],
    'pâtes aux brocolis': [
    'Faire cuire les pâtes dans une casserole d\'eau bouillante salée.',
    'Ajouter les brocolis coupés en petits morceaux dans la casserole 5 minutes avant la fin de la cuisson des pâtes.',
    'Égoutter les pâtes et les brocolis.',
    'Dans une poêle, faire chauffer un peu d\'huile d\'olive et ajouter une gousse d\'ail hachée.',
    'Ajouter les pâtes et les brocolis dans la poêle et faire revenir quelques minutes.',
    'Assaisonner avec du sel, du poivre et du parmesan râpé avant de servir.'
  ],
  'tarte aux poireaux': [
    'Préchauffer le four à 180°C.',
    'Étaler une pâte feuilletée dans un moule à tarte.',
    'Dans une poêle, faire revenir les poireaux émincés dans un peu d\'huile d\'olive jusqu\'à ce qu\'ils soient tendres.',
    'Dans un saladier, battre 3 œufs avec 20cl de crème fraîche.',
    'Ajouter les poireaux dans le saladier et mélanger.',
    'Verser le mélange sur la pâte feuilletée.',
    'Enfourner pendant environ 30 minutes jusqu\'à ce que la tarte soit dorée.'
  ],
  'fondue de poireaux': [
    'Couper les poireaux en rondelles et les laver.',
    'Dans une grande casserole, faire fondre 50g de beurre.',
    'Ajouter les poireaux dans la casserole et les faire revenir quelques minutes.',
    'Ajouter un verre d\'eau dans la casserole et couvrir.',
    'Laisser cuire à feu doux pendant environ 30 minutes jusqu\'à ce que les poireaux soient tendres.',
    'Ajouter 20cl de crème fraîche dans la casserole et mélanger.',
    'Assaisonner avec du sel et du poivre.'
  ],
  'gratin de poireaux': [
    'Préchauffer le four à 180°C.',
    'Couper les poireaux en rondelles et les laver.',
    'Dans une grande casserole, faire fondre 50g de beurre.',
    'Ajouter les poireaux dans la casserole et les faire revenir quelques minutes.',
    'Ajouter un verre d\'eau dans la casserole et couvrir.',
    'Laisser cuire à feu doux pendant environ 30 minutes jusqu\'à ce que les poireaux soient tendres.',
    'Dans un saladier, battre 3 œufs avec 20cl de crème fraîche.',
    'Ajouter les poireaux dans le saladier et mélanger.',
    'Verser le mélange dans un plat à gratin.',
    'Saupoudrer de chapelure et de fromage râpé.',
    'Enfourner pendant environ 30 minutes jusqu\'à ce que le gratin soit doré.'
  ],
  'couscous de chou-fleur': ['Cuire le chou-fleur au couscous.', 'Faire revenir des légumes dans une poêle.', 'Mélanger les légumes avec le chou-fleur.', 'Ajouter des épices et de l’eau.', 'Laisser mijoter jusqu’à ce que le couscous soit cuit.'], 
            'curry de chou-fleur': ['Couper le chou-fleur en fleurettes.', 'Faire revenir du gingembre et de l’ail dans une poêle.', 'Ajouter le chou-fleur et faire revenir.', 'Ajouter des épices et de la crème.', 'Laisser mijoter jusqu’à ce que le chou-fleur soit tendre.'], 
            'purée de chou-fleur': ['Cuire le chou-fleur à la vapeur.', 'Mixer le chou-fleur cuit avec de la crème et du beurre.', 'Ajouter des épices et de la noix de muscade.', 'Réchauffer la purée au micro-ondes.', 'Servir chaud.'], 
            'frites de patates douces': ['Éplucher les patates douces et les couper en frites.', 'Les mettre dans un saladier avec de l’huile d’olive.', 'Ajouter des épices et du sel.', 'Mélanger pour bien enrober les frites.', 'Les disposer sur une plaque et les cuire au four.'], 
            'curry de patates douces': ['Éplucher les patates douces et les couper en cubes.', 'Faire revenir des oignons dans une poêle.', 'Ajouter les patates douces et les épices.', 'Verser de l’eau et laisser mijoter.', 'Servir chaud.'], 
            'soupe de patates douces': ['Éplucher les patates douces et les couper en morceaux.', 'Faire revenir des oignons dans une casserole.', 'Ajouter les patates douces et du bouillon.', 'Laisser mijoter jusqu’à ce que les patates douces soient tendres.', 'Mixer la soupe et ajouter de la crème.'], 
            'sauté de tofu et légumes': ['Couper le tofu en cubes.', 'Faire revenir des légumes dans une poêle.', 'Ajouter le tofu et faire revenir.', 'Ajouter des épices et du tamari.', 'Servir chaud.'], 
            'nouilles sautées au tofu': ['Cuire les nouilles selon les instructions.', 'Faire revenir des légumes et du tofu dans une poêle.', 'Ajouter les nouilles et des épices.', 'Faire sauter le tout.', 'Servir chaud.'], 
  'curry de tofu': ['Couper le tofu en cubes.', 'Faire revenir des oignons dans une poêle.', 'Ajouter le tofu et des légumes.', 'Ajouter du lait de coco et des épices.', 'Laisser mijoter jusqu’à ce que le tout soit cuit.'], 
'salade de quinoa': ['Cuire le quinoa dans de l\'eau bouillante salée pendant environ 15 minutes.', 'Pendant ce temps, couper les tomates cerises en deux et émincer l\'oignon rouge.', 'Préparer la vinaigrette en mélangeant de l\'huile d\'olive, du vinaigre balsamique, du sel et du poivre.', 'Une fois le quinoa cuit, le rincer à l\'eau froide et l\'égoutter.', 'Mélanger le quinoa avec les tomates cerises, l\'oignon rouge et la vinaigrette.'],
    'curry de quinoa': ['Cuire le quinoa dans de l\'eau bouillante salée pendant environ 15 minutes.', 'Pendant ce temps, émincer l\'oignon et couper les légumes en cubes.', 'Dans une poêle, faire revenir l\'oignon dans de l\'huile d\'olive.', 'Ajouter les légumes et faire revenir pendant quelques minutes.', 'Ajouter le quinoa cuit et le lait de coco, puis laisser mijoter à feu doux pendant environ 10 minutes.'],
    'bowl de quinoa': ['Cuire le quinoa dans de l\'eau bouillante salée pendant environ 15 minutes.', 'Pendant ce temps, couper les légumes en cubes.', 'Faire chauffer un peu d\'huile d\'olive dans une poêle et y faire revenir les légumes pendant quelques minutes.', 'Dans un bol, disposer le quinoa cuit, les légumes et les graines de sésame.', 'Servir chaud.'],
    "curry d'épinards": ['Faire chauffer un peu d\'huile d\'olive dans une poêle.', 'Ajouter les épinards et faire revenir jusqu\'à ce qu\'ils soient tombés.', 'Ajouter le lait de coco, le curry et le sel.', 'Laisser mijoter à feu doux pendant environ 10 minutes.', 'Servir chaud.'],
    'tarte aux épinards': ['Préchauffer le four à 180°C.', 'Dans un saladier, mélanger la farine, l\'huile d\'olive et l\'eau jusqu\'à obtenir une pâte.', 'Abaisser la pâte et la disposer dans un moule à tarte.', 'Faire revenir les épinards dans de l\'huile d\'olive pendant quelques minutes.', 'Dans un autre saladier, battre les oeufs, le lait et le sel.'],
    'lasagne aux épinards': ['Préchauffer le four à 180°C.', 'Dans une poêle, faire revenir l\'oignon et l\'ail dans de l\'huile d\'olive.', 'Ajouter les épinards et faire revenir jusqu\'à ce qu\'ils soient tombés.', 'Dans un plat à gratin, alterner des couches de lasagnes, de la sauce tomate, des épinards et de la béchamel.', 'Enfourner pour environ 30 minutes.'],
 'fajitas aux poivrons': ["Faire revenir les poivrons et l'oignon dans l'huile pendant 5 minutes. Ajouter la sauce tomate, le cumin, le paprika et la coriandre. Laisser mijoter 10 minutes. Réchauffer les tortillas dans une poêle. Garnir les tortillas de la préparation."],
'tarte aux poivrons': ['Faire cuire les poivrons au four pendant 10 minutes à 180°C. Les peler et les couper en lanières. Dans un bol, mélanger les œufs, la crème fraîche, le gruyère et les herbes de Provence. Étaler la pâte brisée dans un moule à tarte. Répartir les lanières de poivrons sur le fond de tarte. Verser le mélange œufs-crème-gruyère sur les poivrons. Enfourner la tarte pour 25 minutes à 180°C.'],
'poivrons farcis': ["Faire cuire le riz. Évider les poivrons. Dans une poêle, faire revenir l'oignon et l'ail dans l'huile. Ajouter le riz cuit, les herbes de Provence et saler. Farcir les poivrons avec cette préparation. Les déposer dans un plat allant au four. Enfourner pour 20 minutes à 180°C."],
'céleri-rave rôti': ["Éplucher le céleri-rave et le couper en cubes. Dans un saladier, mélanger les cubes de céleri-rave avec de l'huile, du sel, du poivre et des herbes de Provence. Les disposer sur une plaque allant au four. Enfourner pour 25 minutes à 200°C."],
'velouté de céleri-rave': ["Éplucher et couper en morceaux le céleri-rave et les pommes de terre. Émincer l'oignon et l'ail. Dans une casserole, faire revenir l'oignon et l'ail dans de l'huile. Ajouter le céleri-rave et les pommes de terre. Recouvrir de bouillon de légumes. Laisser cuire à feu doux pendant 25 minutes. Mixer la préparation avec la crème fraîche."],
'salade de céleri-rave': ["Éplucher et râper le céleri-rave. Éplucher et couper en dés la pomme. Émincer l'oignon rouge. Concasser les noix. Dans un saladier, mélanger le céleri-rave, la pomme, l'oignon rouge et les noix. Préparer une vinaigrette avec le vinaigre de cidre, l'huile et du sel. Ajouter la vinaigrette à la salade."],
'carottes rôties au cumin': ["Éplucher et couper les carottes en bâtonnets. Les disposer sur une plaque allant au four. Mélanger dans un bol l'huile, le cumin, du sel et du poivre. Verser cette préparation sur les carottes. Enfourner pour 25 minutes à 200°C."]
'curry de carottes': ["Peler et émincer l'oignon, l'ail et le gingembre. Faire revenir le tout dans l'huile. Ajouter les carottes coupées en rondelles et le curry. Mélanger et ajouter le lait de coco. Laisser mijoter jusqu'à ce que les carottes soient cuites. Ajouter les pois chiches et laisser mijoter encore 5 minutes."],
'tarte aux carottes': ['Préchauffer le four à 200°C. Etaler la pâte brisée dans un moule à tarte. Peler et râper les carottes. Les disposer sur la pâte. Dans un bol, battre les œufs avec la crème fraîche et le cumin. Verser cette préparation sur les carottes. Saupoudrer de gruyère râpé. Enfourner pour 30 minutes.'],
"haricots verts sautés à l'ail": ["Laver les haricots verts et les équeuter. Les faire cuire 5 minutes dans une casserole d'eau bouillante salée. Les égoutter. Dans une poêle, faire chauffer l'huile d'olive. Ajouter l'ail émincé et les haricots verts. Faire sauter pendant 5 minutes. Saler et poivrer."],
"salade de haricots verts": ["Laver les haricots verts et les équeuter. Les faire cuire 5 minutes dans une casserole d'eau bouillante salée. Les égoutter et les passer sous l'eau froide. Couper les tomates cerises en deux. Émincer l'oignon rouge. Dans un saladier, mélanger les haricots verts, les tomates cerises et l'oignon rouge. Ajouter la vinaigrette."],
"gratin de haricots verts": ["Préchauffer le four à 200°C. Laver les haricots verts et les équeuter. Les faire cuire 5 minutes dans une casserole d'eau bouillante salée. Les égoutter. Dans une casserole, faire chauffer la crème fraîche avec l'ail émincé et le gruyère râpé. Ajouter les haricots verts et mélanger. Beurrer un plat à gratin et y verser la préparation. Enfourner pour 20 minutes."],
"soupe à l'oignon": ["Éplucher et émincer les oignons. Les faire revenir dans une casserole avec un peu d'huile d'olive. Ajouter le thym et le laurier. Verser le bouillon de légumes et le vin blanc. Laisser mijoter pendant 20 minutes. Préchauffer le four à 180°C. Couper la baguette en tranches et les faire griller. Répartir la soupe dans des bols allant au four. Déposer une tranche de pain grillé sur chaque bol et saupoudrer de gruyère râpé. Enfourner pour 10 minutes."],
"tarte aux oignons": ["Émincer les oignons et les faire revenir dans une poêle avec de l'huile d'olive et du thym.",
"Dérouler la pâte feuilletée et la disposer dans un moule à tarte.",
"Piquer le fond de la pâte avec une fourchette.",
"Dans un saladier, battre les œufs avec la crème fraîche.",
"Ajouter les oignons à la préparation et mélanger.",
"Verser la préparation sur la pâte.",
"Enfourner la tarte pendant environ 30 minutes à 180°C.",
"Sortir la tarte du four et la laisser refroidir.",
"Servir la tarte froide."],
"poêlée d'oignons": ["Émincer les oignons et les faire revenir dans une poêle avec de l'huile d'olive.",
                     "Ajouter le miel et le vinaigre balsamique.",
                     "Laisser cuire à feu doux jusqu'à ce que les oignons soient bien fondants.",
                     "Servir chaud."],

"guacamole": ["Couper les avocats en deux et enlever le noyau.",
              "Récupérer la chair des avocats et la mettre dans un saladier.",
              "Ajouter le jus de citron vert et écraser la chair des avocats à la fourchette.",
              "Couper la tomate en petits dés et l'ajouter au saladier.",
              "Émincer l'oignon rouge et l'ajouter au saladier.",
              "Ciseler la coriandre et l'ajouter au saladier.",
              "Saler à son goût.",
              "Mélanger le tout jusqu'à obtenir une consistance homogène.",
              "Servir frais."],

"salade d'avocat et de mangue": ["Couper la mangue en petits dés.",
                                "Couper l'avocat en deux, enlever le noyau et prélever la chair à l'aide d'une cuillère.",
                                "Couper l'avocat en petits dés.",
                                "Couper le concombre en petits dés.",
                                "Émincer l'oignon rouge.",
                                "Mélanger tous les ingrédients dans un saladier.",
                                "Arroser de vinaigrette.",
                                "Ciseler la coriandre et l'ajouter à la salade.",
                                "Saler et poivrer à son goût.",
                                "Servir frais."],

"tacos à l'avocat": ["Couper les tomates en petits dés.",
                     "Émincer l'oignon rouge.",
                     "Ciseler la coriandre.",
                     "Couper les avocats en deux, enlever le noyau et prélever la chair à l'aide d'une cuillère.",
                     "Écraser la chair des avocats à la fourchette.",
                     "Faire chauffer les tortillas à la poêle ou au four.",
                     "Garnir les tortillas avec les tomates, l'oignon rouge, la coriandre et la chair d'avocat.",
                     "Arroser de jus de citron vert.",
                     "Saler à son goût."],
"tofu sauté aux noix de cajou": [
        "Couper le tofu en petits cubes.",
        "Dans un bol, mélanger la sauce soja et le miel.",
        "Faire chauffer l'huile de sésame dans une poêle.",
        "Faire revenir l'oignon, l'ail et le gingembre.",
        "Ajouter le tofu et les noix de cajou, puis verser la sauce soja et miel.",
        "Cuire jusqu'à ce que le tofu soit doré."
    ],
    "curry de légumes aux noix de cajou": [
        "Faire chauffer l'huile dans une grande poêle.",
        "Ajouter l'oignon, l'ail et le gingembre et faire revenir jusqu'à ce que l'oignon soit translucide.",
        "Ajouter les légumes et faire cuire jusqu'à ce qu'ils soient tendres.",
        "Ajouter le curry en poudre, le lait de coco et les noix de cajou.",
        "Mélanger et laisser mijoter pendant environ 10 minutes.",
        "Ajouter la coriandre fraîche et saler selon le goût."
    ],
    "salade de chou aux noix de cajou": [
        "Couper le chou en fines lanières.",
        "Râper la carotte et l'oignon rouge.",
        "Mélanger tous les légumes dans un grand saladier.",
        "Ajouter les noix de cajou et la vinaigrette.",
        "Bien mélanger et servir."
    ],
    "crème glacée à la banane": [
        "Éplucher les bananes et les couper en rondelles.",
        "Mixer les bananes avec le lait d'amande, la vanille et le miel jusqu'à obtenir un mélange lisse.",
        "Verser le mélange dans une sorbetière et faire tourner jusqu'à ce qu'il soit bien pris.",
        "Mettre la glace dans un récipient et la placer au congélateur pendant au moins 2 heures."
    ],
    "bananes cuites au four avec du chocolat": [
        "Préchauffer le four à 180°C.",
        "Couper les bananes en deux dans le sens de la longueur.",
        "Faire fondre le chocolat noir au bain-marie.",
        "Placer les bananes sur une plaque de cuisson recouverte de papier sulfurisé.",
        "Verser le chocolat fondu sur les bananes.",
        "Enfourner pendant environ 10 minutes."
    ],
    "pain à la banane": [
        "Préchauffer le four à 180°C.",
        "Écraser les bananes dans un saladier.",
        "Ajouter le sucre, les œufs et le beurre fondu.",
        "Mélanger jusqu'à obtenir une texture homogène.",
        "Ajouter la farine et la levure chimique.",
        "Bien mélanger.",
        "Verser la préparation dans un moule à cake.",
        "Enfourner pendant environ 50 minutes."
    ],
    "tarte aux pommes": [
"Préchauffez le four à 180°C.",
"Étalez la pâte brisée dans un moule à tarte.",
"Pelez, évidez et coupez les pommes en fines tranches.",
"Disposez les tranches de pommes sur la pâte.",
"Saupoudrez de sucre, de cannelle et de beurre coupé en petits morceaux.",
"Enfournez pendant environ 40 minutes."
],
"compote de pommes": [
"Pelez et coupez les pommes en petits morceaux.",
"Dans une casserole, mélangez les pommes, le sucre, la cannelle et l'eau.",
"Faites cuire à feu moyen jusqu'à ce que les pommes soient bien cuites et que l'eau se soit évaporée.",
"Mixez la compote jusqu'à obtenir une texture lisse.",
"Laissez refroidir et servez."
],
"pommes caramélisées au four": [
"Préchauffez le four à 180°C.",
"Pelez et coupez les pommes en fines tranches.",
"Disposez les tranches de pommes dans un plat allant au four.",
"Saupoudrez de sucre et de beurre coupé en petits morceaux.",
"Enfournez pendant environ 30 minutes en remuant de temps en temps."
],
"tarte au citron": [
"Préchauffez le four à 180°C.",
"Étalez la pâte brisée dans un moule à tarte.",
"Dans un saladier, mélangez le jus et le zeste des citrons, le sucre, le beurre fondu et les œufs battus.",
"Versez la préparation sur la pâte et enfournez pendant environ 30 minutes.",
"Laissez refroidir avant de servir."
],
"sorbet au citron": [
"Pelez les citrons et mixez-les avec le sucre et l'eau.",
"Versez la préparation dans une sorbetière et faites tourner jusqu'à obtenir une consistance crémeuse.",
"Mettez au congélateur pendant au moins 2 heures avant de servir."
],
"gâteau au citron": [
"Préchauffez le four à 180°C.",
"Dans un saladier, mélangez le sucre et le beurre fondu.",
"Ajoutez les œufs un par un en mélangeant bien entre chaque ajout.",
"Ajoutez le zeste et le jus des citrons, la farine et la levure.",
"Versez la préparation dans un moule beurré et enfournez pendant environ 30 minutes."
],
'brownies au chocolat': [
        'Faire fondre le beurre et le chocolat noir au bain-marie.',
        'Ajouter le sucre et mélanger.',
        'Ajouter la farine et mélanger.',
        'Ajouter les œufs et mélanger.',
        'Verser la pâte dans un moule beurré et enfourner pendant environ 25 minutes.'
    ],
    'mousse au chocolat': [
        'Faire fondre le chocolat noir au bain-marie.',
        'Séparer les blancs des jaunes d’œufs.',
        'Monter les blancs en neige ferme.',
        'Ajouter le sucre aux blancs en neige.',
        'Ajouter la crème fraîche dans le chocolat fondu et mélanger.',
        'Ajouter les jaunes d’œufs dans le chocolat fondu et mélanger.',
        'Incorporer délicatement les blancs en neige au mélange chocolaté.',
        'Répartir la mousse dans des verrines et placer au réfrigérateur pendant environ 2 heures.'
    ],
    'gâteau au chocolat': [
        'Faire fondre le chocolat noir et le beurre au bain-marie.',
        'Ajouter le sucre et mélanger.',
        'Ajouter la farine et mélanger.',
        'Ajouter les œufs et mélanger.',
        'Verser la pâte dans un moule beurré et enfourner pendant environ 30 minutes.'
    ],
    'tarte aux framboises': [
        'Étaler la pâte sablée dans un moule à tarte beurré.',
        'Piquer le fond de tarte avec une fourchette.',
        'Répartir les framboises sur le fond de tarte.',
        'Battre les œufs en omelette avec le sucre et la crème fraîche.',
        'Verser la préparation sur les framboises.',
        'Enfourner la tarte pendant environ 40 minutes.'
    ],
    'sorbet aux framboises': [
        'Mixer les framboises avec le sucre et l’eau.',
        'Verser la préparation dans une sorbetière et turbiner pendant environ 30 minutes.'
    ],
    'clafoutis aux framboises': [
        'Beurrer un plat allant au four.',
        'Répartir les framboises dans le plat.',
        'Battre les œufs en omelette avec le sucre, la farine et la vanille.',
        'Ajouter le lait et mélanger.',
        'Verser la préparation sur les framboises.',
        'Enfourner le clafoutis pendant environ 30 minutes.'
    ],
    'sauce tomate maison': [
        'Peler et hacher finement l’oignon et l’ail.',
        'Faire chauffer l’huile d’olive dans une casserole et y faire revenir l’oignon et l’ail pendant environ 5 minutes.',
        'Ajouter les tomates pelées et épépinées, le sucre, le sel et le poivre.',
        'Laisser mijoter la sauce à feu doux pendant environ 30 minutes.',
        'Mixer la sauce jusqu’à obtenir une texture lisse.'
    ],
 'tarte à la tomate': [
        'Préchauffer le four à 180°C.',
        'Étaler la pâte brisée dans un moule à tarte et la piquer à l’aide d’une fourchette.',
        'Badigeonner le fond de tarte de moutarde.',
        'Couper les tomates en rondelles et les disposer sur le fond de tarte.',
        'Saupoudrer de fromage râpé et de basilic.',
        'Arroser d’un filet d’huile d’olive.',
        'Enfourner la tarte pendant environ 30 minutes.'
    ],
 'salade de tomates et mozzarella': [
        'Couper les tomates et la mozzarella en tranches.',
        'Disposer les tranches de tomates et de mozzarella en alternance sur un plat.',
        'Parsemer de feuilles de basilic.',
        'Arroser d’un filet d’huile d’olive.',
        'Saler et poivrer.'
    ],
 'purée de pommes de terre': [
        'Peler les pommes de terre et les couper en morceaux.',
        'Faire cuire les pommes de terre dans une casserole d’eau bouillante salée pendant environ 20 minutes.',
        'Égoutter les pommes de terre et les écraser à l’aide d’un presse-purée ou d’une fourchette.',
        'Ajouter le beurre et le lait.',
        'Saler et poivrer.'
    ],
 'frites de patates douces': [
        'Préchauffer le four à 200°C.',
        'Peler les patates douces et les couper en frites.',
        'Mélanger les frites avec de l’huile d’olive, du sel et du poivre.',
        'Disposer les frites sur une plaque de cuisson recouverte de papier sulfurisé.',
        'Enfourner les frites pendant environ 20 minutes.'
    ],
 'curry de pommes de terre et épinards': [
        'Peler et hacher finement l’oignon et l’ail.',
        'Faire chauffer l’huile d’olive dans une sauteuse et y faire revenir l’oignon et l’ail pendant environ 5 minutes.',
        'Ajouter les pommes de terre pelées et coupées en cubes, le lait de coco et le curry.',
        'Saler et poivrer.',
        'Couvrir la sauteuse et laisser mijoter pendant environ 20 minutes.',
        'Ajouter les feuilles d’épinards et laisser cuire pendant environ 5 minutes.'
    ],
'riz sauté aux légumes': [
'Cuire le riz selon les instructions sur l’emballage.',
'Peler et couper les carottes en petits dés.',
'Laver et couper le poivron en petits dés.',
'Peler et émincer l’oignon et l’ail.',
'Faire chauffer l’huile d’olive dans une poêle.',
'Faire revenir l’oignon et l’ail pendant quelques minutes.',
'Ajouter les carottes et le poivron dans la poêle et cuire pendant environ 10 minutes.',
'Ajouter le riz cuit dans la poêle.',
'Ajouter la sauce soja, le sel et le poivre.',
'Mélanger le tout et cuire pendant quelques minutes.',
'Servir chaud.'
],
'riz au lait végétal': [
'Cuire le riz selon les instructions sur l’emballage.',
'Dans une casserole, mélanger le lait végétal, le sucre et la vanille.',
'Ajouter le riz cuit dans la casserole.',
'Faire cuire à feu doux en remuant régulièrement pendant environ 30 minutes.',
'Retirer du feu et laisser refroidir.',
'Servir froid.'
],
'bol de riz aux haricots noirs': [
'Faire cuire le riz selon les instructions sur le paquet.',
'Faire revenir l’oignon et le poivron rouge dans l’huile d’olive.',
'Ajouter les haricots noirs égouttés et les faire cuire pendant quelques minutes.',
'Mélanger le riz cuit avec les haricots noirs, l’oignon et le poivron rouge.',
'Saler et poivrer, et ajouter de la coriandre fraîche hachée avant de servir.'
],
"spaghetti à l'ail et à l'huile d'olive": [
'Faire cuire les spaghetti selon les instructions sur le paquet.',
'Faire chauffer l’huile d’olive dans une poêle et y faire revenir l’ail et le piment rouge.',
'Ajouter les spaghetti cuits dans la poêle et mélanger.',
'Ajouter du persil frais haché et du parmesan râpé.',
'Saler et poivrer avant de servir.'
],
'lasagne aux légumes': [
'Faire cuire les lasagnes selon les instructions sur le paquet.',
'Faire chauffer de l’huile d’olive dans une poêle et y faire revenir l’oignon et l’ail.',
'Ajouter les légumes coupés en petits dés (épinards, carotte, céleri, courgette) et faire cuire pendant environ 10 minutes.',
'Ajouter les tomates concassées et le basilic haché et laisser mijoter pendant environ 20 minutes.',
'Dans un plat à gratin, alterner une couche de lasagnes, une couche de légumes et une couche de ricotta jusqu’à épuisement des ingrédients.',
'Saupoudrer de fromage râpé et enfourner pendant environ 30 minutes.'
],
'salade de pâtes et légumes grillés': [
'Faire cuire les pâtes selon les instructions sur le paquet.',
'Couper les légumes en morceaux et les faire griller dans une poêle avec de l’huile d’olive et de l’ail.',
'Mélanger les pâtes cuites avec les légumes grillés et les tomates cerises coupées en deux.',
'Préparer une vinaigrette en mélangeant de l’huile d’olive, du jus de citron, du persil haché, du sel et du poivre.',
'Arroser la salade de pâtes avec la vinaigrette et servir.'
],
'omelette aux champignons': [
'Faire chauffer l’huile d’olive dans une poêle.',
'Ajouter les champignons émincés et faire revenir jusqu’à ce qu’ils soient dorés.',
'Ajouter l’oignon et l’ail hachés et faire revenir pendant 1 minute.',
'Battre les œufs en omelette et ajouter la préparation aux champignons.',
'Faire cuire l’omelette pendant environ 3 minutes de chaque côté.'
],
'quiche aux épinards': [
'Préchauffer le four à 180°C.',
'Étaler la pâte brisée dans un moule à tarte beurré.',
'Faire cuire les épinards à la poêle avec l’oignon et l’ail hachés.',
'Battre les œufs en omelette avec la crème fraîche, le fromage râpé, le sel et le poivre.',
'Ajouter la préparation aux épinards et verser sur la pâte brisée.',
'Enfourner la quiche pendant environ 35 minutes.'
],
'huevos rancheros': [
'Faire chauffer l’huile d’olive dans une poêle.',
'Ajouter l’oignon et l’ail hachés et faire revenir jusqu’à ce qu’ils soient dorés.',
'Ajouter les haricots rouges, les tomates concassées, la coriandre, le piment rouge, le sel et le poivre.',
'Laisser mijoter pendant environ 10 minutes.',
'Faire chauffer les tortillas dans une poêle.',
'Faire cuire les œufs au plat.',
'Servir les haricots rouges sur les tortillas, garnis d’un œuf au plat.'
],
'pizza au fromage': [
'Préchauffer le four à 220°C.',
'Étaler la pâte à pizza sur une plaque de cuisson.',
'Étaler la sauce tomate sur la pâte.',
'Recouvrir de fromage râpé et de tranches de mozzarella.',
'Arroser d’un filet d’huile d’olive et assaisonner avec du sel et du poivre.',
'Enfourner la pizza pendant environ 15 minutes.'
],
'fondue de fromage': [
'Frotter le fond du caquelon avec une gousse d’ail.',
'Verser le vin blanc dans le caquelon et faire chauffer.',
'Ajouter le fromage à fondue et remuer jusqu’à ce qu’il soit fondu.',
'Ajouter le kirsch et remuer.',
'Tremper les morceaux de pain dans la fondue.'
],
'macaroni au fromage': [
'Faire cuire les macaronis selon les instructions sur le paquet.',
'Dans une casserole, faire fondre le beurre.',
'Ajouter la farine et remuer.',
'Ajouter le lait et remuer jusqu’à ce que la sauce épaississe.',
'Ajouter le fromage râpé, la moutarde, le sel et le poivre.',
'Mélanger la sauce avec les macaronis cuits.'
],
   };

  if (recipes.hasOwnProperty(recipeName)) {
    return recipes[recipeName];
  } else {
    return "Recette introuvable";
  }
}
