const recipes = [
    {
      "id": "phoenix-stew",
      "name": "Phoenix Rising Stew",
      "description": "A fiery stew that ignites passion and courage within the soul, perfect for new beginnings.",
      "intention": "vitality",
      "element": "Fire",
      "difficulty": 2,
      "cookTime": "45 minutes",
      "servings": "4 souls",
      "ingredients": [
        "2 cups of crimson tomatoes, diced",
        "1 red bell pepper, charred and chopped",
        "3 cloves of dragon garlic, minced",
        "1 cup of flame-kissed carrots",
        "2 cups of phoenix broth (vegetable stock)",
        "1 tsp of smoked paprika",
        "1/2 tsp of cayenne pepper",
        "1 bay leaf from the sacred grove",
        "1 cup of red lentils",
        "Salt and pepper to taste",
        "Fresh basil leaves for garnish"
      ],
      "instructions": [
        "Light your sacred flame and heat a cauldron over medium-high heat.",
        "Add the charred bell pepper and let it release its smoky essence.",
        "Stir in the dragon garlic and flame-kissed carrots, cooking until fragrant.",
        "Pour in the crimson tomatoes and let them bubble with fiery energy.",
        "Add the phoenix broth, red lentils, and all spices. Bring to a rolling boil.",
        "Reduce heat and let simmer for 25 minutes, stirring occasionally with intention.",
        "Remove the bay leaf and season with salt and pepper.",
        "Serve hot, garnished with fresh basil leaves to honor the earth element."
      ],
      "notes": "Best prepared during the full moon for maximum potency. The stew grows more powerful with each reheating."
    },
    {
      "id": "moonwater-soup",
      "name": "Moonwater Healing Soup",
      "description": "A silvery soup that soothes the spirit and heals emotional wounds.",
      "intention": "Healing",
      "element": "Water",
      "difficulty": 1,
      "cookTime": "30 minutes",
      "servings": "2 souls",
      "ingredients": [
        "3 cups of moon-blessed water",
        "1 cup of silverroot mushrooms",
        "2 sprigs of lunar thyme",
        "A pinch of sea salt",
        "1/2 cup of pearl barley",
        "1 white onion, diced",
        "1 clove of garlic, crushed",
        "1 tsp of moonflower extract"
      ],
      "instructions": [
        "Begin under a waxing moon. Heat moonwater in a pot until it shimmers.",
        "Add onion and garlic, saut\u00e9 until translucent.",
        "Toss in the mushrooms, barley, and thyme. Simmer gently.",
        "Add salt and moonflower extract. Stir clockwise seven times.",
        "Let sit for 10 minutes under moonlight before serving."
      ],
      "notes": "Ideal on a waning moon when seeking emotional clarity and inner peace."
    },
    {
      "id": "earth-bread",
      "name": "Earth Mother's Grounding Bread",
      "description": "A hearty, nurturing bread that connects you to the earth's stabilizing energy.",
      "intention": "Protection",
      "element": "Earth",
      "difficulty": 3,
      "cookTime": "1 hour",
      "servings": "8 slices",
      "ingredients": [
        "3 cups of ancient grain flour",
        "1 tbsp of wild yeast",
        "1 cup of spring water",
        "1 tsp of honeyroot syrup",
        "1 pinch of volcanic salt",
        "1 tbsp of crushed sage",
        "Olive oil for brushing"
      ],
      "instructions": [
        "Mix all ingredients in a sacred bowl, kneading until smooth.",
        "Let rest covered in a warm place for 1 hour.",
        "Preheat oven to 375\u00b0F with firewood or enchanted stone.",
        "Shape the dough into a round loaf, dust with sage.",
        "Bake for 40 minutes. Brush with olive oil at the halfway mark.",
        "Cool on an obsidian slab or wooden rack."
      ],
      "notes": "Bury a slice under a tree to offer thanks to Earth spirits."
    },
    {
      "id": "storm-potion",
      "name": "Storm Whisperer's Elixir",
      "description": "A sharp tonic that sparks clarity and unlocks suppressed energy.",
      "intention": "Awakening",
      "element": "Air",
      "difficulty": 2,
      "cookTime": "10 minutes",
      "servings": "1 vial",
      "ingredients": [
        "1/2 cup of sparkleaf tea",
        "3 drops of thunder blossom tincture",
        "A twist of lemon lightning",
        "Pinch of crystal sugar",
        "1 tsp of sky salt"
      ],
      "instructions": [
        "Boil sparkleaf tea under a windy sky.",
        "Stir in thunder blossom and lemon lightning.",
        "Add sky salt and sugar, whispering your intention.",
        "Let sit uncovered as air swirls around.",
        "Consume before meditation or spellwork."
      ],
      "notes": "Only brew during windstorms or during deep introspection."
  },
  {
    id: "love-pie",
    name: "Heartfire Love Pie",
    description: "A warm, aromatic pie infused with enchantments of affection and romantic courage.",
    intention: "Love",
    element: "Fire",
    difficulty: 2,
    cookTime: "50 minutes",
    servings: "6 slices",
    ingredients: [
      "2 cups of rose-infused berries",
      "1/2 cup of honeyed figs",
      "1 tsp of cinnamon bark",
      "1 enchanted pie crust",
      "1 tbsp of vanilla essence",
      "A few dried hibiscus petals",
      "1 egg (optional, for binding)",
      "Pinch of star sugar"
    ],
    instructions: [
      "Preheat the oven with a chant of warmth and longing.",
      "Combine berries, figs, and spices in a sacred bowl.",
      "Pour the mixture into the enchanted crust, sealing with intention.",
      "Bake until golden and fragrant.",
      "Serve warm under candlelight to ignite emotional bonds."
    ],
    notes: "Most powerful during Venus transits or under a waxing crescent moon."
  },
  {
    id: "dream-syrup",
    name: "Dreamwalker’s Syrup",
    description: "A viscous, violet elixir that opens the gates of dreams and guides lucid journeys.",
    intention: "Vision",
    element: "Water",
    difficulty: 1,
    cookTime: "15 minutes",
    servings: "1 small bottle",
    ingredients: [
      "1 cup of violet petals",
      "1/2 cup of blue lotus extract",
      "3 spoons of dream honey",
      "1 pinch of crushed amethyst dust",
      "2 drops of nightshade nectar"
    ],
    instructions: [
      "Simmer petals and lotus in moonwater until color deepens.",
      "Add honey and stir gently while meditating on a question.",
      "Drop in nectar and amethyst dust, whispering your dreams.",
      "Let cool and bottle in a dark vial."
    ],
    notes: "Take before sleep or ritual dreaming. Use sparingly under dark moon."
  },
  {
    id: "solar-brew",
    name: "Solar Radiance Brew",
    description: "A bright, golden tea that fuels confidence, joy, and clarity.",
    intention: "Empowerment",
    element: "Fire",
    difficulty: 1,
    cookTime: "8 minutes",
    servings: "2 cups",
    ingredients: [
      "2 tbsp dried calendula flowers",
      "1 tsp lemon zest",
      "1 drop golden sun oil",
      "1 tsp raw honey",
      "Pinch of cinnamon sun-dust"
    ],
    instructions: [
      "Steep calendula and zest in hot spring water under sunlight.",
      "Add cinnamon and golden oil. Stir in a clockwise motion.",
      "Finish with honey and speak a word of power.",
      "Drink with upright posture and open heart."
    ],
    notes: "Ideal for mornings before rituals, interviews, or important meetings."
  },
  {
    id: "shadowmist-elixir",
    name: "Shadowmist Elixir",
    description: "A deep black potion that veils the self in secrecy and wards against intrusive energy.",
    intention: "Protection",
    element: "Earth",
    difficulty: 2,
    cookTime: "25 minutes",
    servings: "1 small flask",
    ingredients: [
      "1 cup of elderberry juice",
      "1/4 cup of activated charcoal water",
      "3 black tourmaline chips (removed before drinking)",
      "7 dried mugwort leaves",
      "1 spoon of ash honey"
    ],
    instructions: [
      "Steep mugwort in simmering elderberry juice under a waning moon.",
      "Add charcoal water slowly while chanting a shielding incantation.",
      "Stir in honey in a figure-eight motion.",
      "Drop in the tourmaline for 3 minutes, whispering your protection.",
      "Remove stones, cool, and bottle in opaque glass."
    ],
    notes: "Use during spiritual cleansing or when feeling energetically vulnerable. Do not consume more than one dose per day."
  }
  ,
  {
    id: "serpents-whisper-tea",
    name: "Serpent’s Whisper Tea",
    description: "A deep green brew that sharpens intuition and opens psychic pathways.",
    intention: "Insight",
    element: "Air",
    difficulty: 1,
    cookTime: "12 minutes",
    servings: "1 cup",
    ingredients: [
      "1 tsp of dried mugwort",
      "1 tsp of jasmine flowers",
      "1/2 tsp of peppermint",
      "3 drops of obsidian-infused water",
      "1 snake-shaped anise star"
    ],
    instructions: [
      "Boil water and pour over herbs while visualizing a coiled serpent awakening.",
      "Add obsidian water drop by drop while breathing deeply.",
      "Place the anise star last and whisper your question aloud.",
      "Steep for 5 minutes, then sip slowly in silence."
    ],
    notes: "Use before divination or spirit work. Best under waxing moon or stormy skies."
  }
,{
  id: "solstice-fire-tonic",
  name: "Solstice Fire Tonic",
  description: "A golden, spicy blend that awakens confidence, vitality, and inner fire.",
  intention: "Empowerment",
  element: "Fire",
  difficulty: 1,
  cookTime: "10 minutes",
  servings: "1 ritual shot",
  ingredients: [
    "1/2 cup of fresh orange juice",
    "1 tsp of grated ginger root",
    "3 dashes of cinnamon",
    "1 drop of dragon’s blood resin (ethically sourced)",
    "A twist of chili pepper"
  ],
  instructions: [
    "Warm orange juice gently and add ginger while visualizing a rising sun.",
    "Stir in cinnamon and chili, focusing on your solar plexus.",
    "Add dragon’s blood and chant your name three times.",
    "Drink warm with intention, preferably at sunrise."
  ],
  notes: "Perfect for rituals of courage, manifestation, or starting a bold new path."
}
    
  
  ];
  
  export default recipes;