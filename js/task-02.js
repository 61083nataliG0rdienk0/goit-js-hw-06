const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeIngredientItems = elements => { 
  return elements.map(ingredient => {
    const ingredientItemRef = document.createElement('li');
    ingredientItemRef.classList.add('item');
    ingredientItemRef.textContent = ingredient;
    
    return ingredientItemRef;
  });
};

const ingredientsListRef = document.querySelector('#ingredients');
const ingredientsItems = makeIngredientItems(ingredients);
ingredientsListRef.append(...ingredientsItems);
