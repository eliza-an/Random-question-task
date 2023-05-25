import React, { useState } from "react";

const FruitSelector = (ItemsPicked) => {
  const FoodSelection = ["Apples","Bananas","Oranges","Pears","Plums","Kiwi","Lemons","Grapefruits","Watermelons","Pineapples","Peaches","Nectarines","Mangoes","Grapes","Strawberries","Raspberries","Blueberries","Blackberries","Papayas","Cantaloupes","Apricots","Cranberries","Cherries","Passion fruit","Guava","Carrots","Potatoes","Onions","Cabbage","Cauliflower","Broccoli","Zucchini (Courgette)","Bell peppers","Tomatoes","Spinach","Lettuce","Cucumbers","Green beans","Eggplant (Aubergine)","Celery","Radishes","Beets","Sweet potatoes","Butternut squash","Peas","Brussels sprouts","Asparagus","Artichokes","Kale","Mushrooms", "White rice","Brown rice","Basmati rice","Spaghetti","Penne","Macaroni","Fusilli","Green lentils","Brown lentils","Red lentils","Yellow lentils","Rolled oats","Steel-cut oats","Quick oats","Kidney beans","Black beans","Chickpeas","Pinto beans","All-purpose flour","Whole wheat flour","Bread flour","White sugar","Brown sugar","Table salt","Sea salt","Cumin","Paprika","Turmeric","Cinnamon","Chili powder","Vegetable oil","Sunflower oil","Canola oil","Canned tomatoes","Crushed tomatoes","Tomato sauce","Canned tuna","Baked beans","Cannellini beans","Black beans","Peanut butter","Honey","Almonds","Walnuts","Peanuts","Cashews","Raisins","Apricots","Dates","Cranberries","Prunes","Black tea","Green tea","Herbal tea","Ground coffee","Instant coffee","Stock cubes","Pasta sauce","Corn flakes","Oat flakes","Rice puffs","Breadcrumbs","Cocoa powder","White vinegar","Apple cider vinegar","Soy sauce","Mustard","Canned corn","Canned peas","Canned green beans","Coconut milk","Canned vegetable soup"];
  const [firstItem, setFirstItem] = useState("");
  const [secondItem, setSecondItem] = useState("");

  const selectItems = () => {
    const IndexRandom = Math.floor(Math.random() * FoodSelection.length);
    const first = FoodSelection[IndexRandom];
    let second = "";

    // This sections makes sure that both items are different each time
    if (FoodSelection.length > 1) {
      FoodSelection.splice(IndexRandom, 1); //taking away the firs titem
      const secondIndex = Math.floor(Math.random() * (FoodSelection.length));
      second = FoodSelection[secondIndex];
    }

    setFirstItem(first);
    setSecondItem(second);

  //passing these as a prop  
 ItemsPicked(first,second) };

};

export default FruitSelector;
