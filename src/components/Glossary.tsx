import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

//sets the form of the data
const initalData = [
  {
    id: '',
    recipeTitle: '',
    amountOfIngredients: '',
    ingredients: '',
  },
]

export default function GlossaryForm() {
  //sets the recipes
  const [ingredients, setIngredients] = useState(['Tomato', 'Onions', 'Carrot'])

  //what we will add to the ingredients
  const [newIngredient, setNewIngredient] = useState('')

  //text box where we add an ingredient
  function handleInputChange(event: any) {
    setNewIngredient(event.target.value)
  }

  function addIngredient() {
    if (newIngredient !== '') {
      setIngredients((ingredient) => [...ingredients, newIngredient])
      setNewIngredient('')
    }
  }

  //deletes ingredient based on its index
  function deleteIngredient(index: any) {
    const updatedIngredients = ingredients.filter((_, i) => i !== index)
    setIngredients(updatedIngredients)
  }

  return (
    <>
      <div>
        <h1>Add task here</h1>
        <input
          type="text"
          placeholder="Enter tasks here"
          value={newIngredient}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addIngredient}>
          Add
        </button>
      </div>
      <ol>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            <span className="text">{ingredient}</span>
            <button
              className="delete-button"
              onClick={() => deleteIngredient(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
    </>
  )
}
