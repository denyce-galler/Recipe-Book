import { useState, useEffect, react } from "react"
import axios from 'axios'


const Recipes = () => {
  const [recipes, setRecipes] = useState({
    recipe_name:"",
  })


  const handleChange = (e) => {
    setRecipes(prev=>({...prev, [e.target.recipe]: e.target.value}))
  }
  console.log(recipes)

  useEffect(()=>{
    const fetchAllRecipes = async () =>{
      try {
        const res = await axios.get("http://localhost:5001/add-recipe")
        setRecipes(res.data)
      } catch(err){
        console.log(err)
      }
    }
    fetchAllRecipes()
  },[])

  return(
    <>
    <h1>Recipes</h1>
    <p>Here are your current recipes below</p>

    <div className="add recipe">
      <h1>Add your recipe here</h1>
      <input type="text" placeholder="Your next recipe here" name="recipe" onChange={handleChange}></input>
    </div>
    </>
  )
} 


export default Recipes;

