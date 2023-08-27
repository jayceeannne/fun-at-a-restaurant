function nameMenuItem(itemName) {
  return `Delicious ${itemName}`
}

function createMenuItem(itemName, price, type){
  return {
    name: itemName,
    price: price,
    type: type
  }
}

function addIngredients(oneIngredient, ingredients){
  ingredients.push(oneIngredient)
  return ingredients
}



module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


