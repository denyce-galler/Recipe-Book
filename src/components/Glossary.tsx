import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function GlossaryForm() {
  interface recipeInitialValue {
    recipeTitle:"",
    ingredients:[],
  }

    const [recipe, setNewRecipe] = useState<recipeInitialValue>({
      recipeTitle: '',
      ingredients: [],
    });


  const handleInputChange = (e:any)=> {

    if (recipe.ingredients.length === 0) {
     <i>Please input a recipe</i>
    }
    const {name, value} = e.target;
    setNewRecipe((prev) => { return {...prev, [name]:value}})
  }



  // function handleInputChangeForRecipeTitle(event:any){
  //   if(newRecipeName!==''){
  //     setNewRecipeName(event.target.value)
  //   }
  // }

  const handleOnSubmit = (e:any) => {
      e.preventDefault();
      console.log(recipe.ingredients)
      console.log(recipe.recipeTitle)
  }

  // //deletes ingredient based on its index
  // function deleteIngredient(index: any) {
  //   const updatedIngredients = Object.keys(recipe).filter((element, i) => i !== index)
  //   setNewRecipe({
  //     ...recipe,
  //     ingredients: updatedIngredients
  //   })
  // }

  // function addRecipeTitle(){
  //   const updatedRecipeTitle = Object.keys()
  //   setNewRecipe({...recipe, recipeTitle:updatedRecipeTitle})
  // }

  return (
    <>
      <form onSubmit={handleOnSubmit}>
      <div>
        <h1>Add your recipe here</h1>
        <input
          type="text"
          placeholder="Enter Ingredients Here"
          value={recipe.ingredients}
          onChange={handleInputChange}
          name="ingredients"//IMPORTANT
        />
      </div>
      <div className="recipe-name"> 
        <input type="text" 
          placeholder="Enter Recipe Title Here" 
          value={recipe.recipeTitle} 
          onChange={handleInputChange}
          name="recipeTitle"
          />
      </div>
      <button className="recipe-add-button"> 
          Add 
      </button>
        <button className="delete-button">
          Delete
        </button>
        <p>Recipe Title: {recipe.recipeTitle}</p>
        <p>Ingredients: {recipe.ingredients}</p>
      </form>
    </>
    )

}



