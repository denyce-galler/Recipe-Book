import {react, useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListRecipes = () => {
  const [listRecipes, setListRecipes] = useState([]);

  useEffect(()=>{
    const fetchAllRecipes = async () =>{
      try {
        const res = await axios.get("http://localhost:5001/list-recipes")
        setListRecipes(res.data)
        console.log(res)
      } catch(err){
        console.log(err)
      }
    }
    fetchAllRecipes()
  },[])

  return(
    <>
    <h1>Here are your recipes</h1>
    <div>
    {listRecipes.map((recipe) => (
      <div className="listRecipe" key={recipe.recipe_id}>
        <p>{recipe.recipe_name}</p> 
      </div>
    ))}
    <Link to="/add-recipe">
      <button>
        Add recipe
      </button>
    </Link>
    </div>  
    </>
  )
}

export default ListRecipes;