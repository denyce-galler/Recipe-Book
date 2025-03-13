import { useState, useEffect, react } from "react"
import axios from 'axios'


const Recipes = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(()=>{
    const fetchAllRecipes = async () =>{
      try {
        const res = await axios.get("http://localhost:5001/recipes")
        setRecipes(res.data)
        console.log(res)
      } catch(err){
        console.log(err)
      }
    }
    fetchAllRecipes()
  },[])


  return(
    <>
    <h1>Recipes</h1>
    <p>Here are your recipes below</p>
    <div>
      {recipes.map((recipe) => (
        <div className="recipe" key={recipe.id}>
          <p>{recipe.recipe_name}</p> 
        </div>
      ))}
    </div>
    </>
  )
} 


export default Recipes;