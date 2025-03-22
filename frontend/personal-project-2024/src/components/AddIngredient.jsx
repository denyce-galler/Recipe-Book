import {React, useState, useEffect} from "react";
import axios from 'axios'

const AddIngredient = () => {
  const[ingredients, setIngredients] = useState({ingredient:""})

  // const handleChange = (e) => {
  //   setIngredients(prev=>({...prev, [e.target.name]: e.target.value}))
  // }

  //whatever is received in the form gets plugged in ie. setIngredients()
  useEffect(()=>{
    const fetchAllIngredients = async () =>{
      try {
        const res = await axios.get("http://localhost:5001/add-ingredient")
        setIngredients(res.data)
      } catch(err){
        console.log(err)
      }
    }
    fetchAllIngredients()
  },[])

  return (
    //render same thing as Recipes.jsx but just different posting
    <>
    <h1>Add your ingredient here</h1>
    {/* <div>
      <input type="text" placeholder="ingredient" name="ingredient"/>
    </div> */}
    </>
  )

}

export default AddIngredient

// {ingredients.map((ingredient) => (
//   <div className="recipe" key={ingredient.id}>
//     <p>{ingredient.ingredient_name}</p> 
//   </div>
// ))}