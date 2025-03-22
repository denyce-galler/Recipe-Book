// import mysql from "mysql"
import express from "express"
import cors from "cors"
import mysql from 'mysql'

// const express = require('express')
// const cors = require('cors')
// const mysql = require('mysql')

const app = express()


//allows us to send JSON file using client
// app.use(express.json)
//middleware
app.use(cors())

const db = mysql.createPool({
  host:"localhost",
  user:"root",
  password:"Rd8F6Z5g%7d@RLexF2dC",
  database:"recipe_book",
  waitForConnections:true,
  connectionLimit:10,
  queueLimit:0
})

// const dbIngredients = mysql.createConnection({
//   host:"localhost",
//   user:"root",
//   password:"Rd8F6Z5g%7d@RLexF2dC",

// })

// const db = dbIngredients.

// db.recipe

app.get('/list-recipes', async (req,res) => {
  try{
    const q = "SELECT * FROM recipe"
    await db.query(q,(err,data)=>{
      if(err) return res.json(err)
        return res.json(data)
  })} catch(error){
    console.error("error from recipes back end", 500)
  }
}
)

// app.get('/recipes', async (req,res) => {
//     try{
//       const q = "SELECT * FROM recipe"
//       await db.query(q,(err,data)=>{
//         if(err) return res.json(err)
//           return res.json(data)
//     })} catch(error){
//       console.error("error from recipes back end", 500)
//     }
//   }
// )

app.post('/recipes', async (req,res) => {
  try{
    const q = "INSERT INTO recipe_book.recipe (`recipe_name`) VALUES (?)"

    // const reqBody = {
    //   recipe_name: req.body.recipe_name
    // }

    const values = ["spaghetti"]
    await db.query(q, values)
    res.json(recipes)
    res.status(200).json({status: "Created recipe successfully"})
    
  } catch(error){
    console.error("Unable to create recipe")
  }

})

app.get('/add-recipe', async (req,res) => {
  try {
    const[results] = await db.query("SELECT recipe.recipe_id, recipe.recipe_name, recipe_ingredients.ingredient_id, recipe_ingredients.ingredient_name FROM recipe_book.recipe JOIN recipe_book.recipe_ingredients ON recipe.recipe_id = recipe_ingredients.ingredient_id")
    res.json(results)
  } catch(err){
    console.error("Error getting JOIN")
    res.status(500).json({error: "ERROR: Database error"})
  }
})


app.post('/add-ingredient', async (req,res) => {
  //question mark allows you to run through various inputs ie. VALUES (?), [values], [0]
    const ingredientInsertQuery = "INSERT INTO recipe_ingredients (`ingredient_name`) VALUES (?)"
    const ingredientsJoinRecipeQuery = "SELECT recipe.recipe_id, recipe.recipe_name, recipe_ingredients.ingredient_id, recipe_ingredients.ingredient_name FROM recipe JOIN recipe_ingredients ON recipe.recipe_id = recipe_ingredients.ingredients_id"
  
    try{
      const [recipe, recipe_ingredients] = await Promise.all([
        db.query(ingredientInsertQuery),
        db.query(ingredientsJoinRecipeQuery)
      ])
      // const q = "INSERT INTO recipe_ingredients (`ingredient_name`) VALUES (?)"
      const values = [
        "test"
        // req.body.ingredient_name  
      ]

      //send query with sql command + values
      db.query(ingredientInsertQuery,[values], (data)=>{
  
        console.log(data)
        return res.json("ingredients added")
      })
    } catch(err){
      console.error("Error inserting recipe")
      return res.json(err)

    }
})


app.listen(5001, ()=> {
  console.log("Server is running")})

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Rd8F6Z5g%7d@RLexF2dC' FLUSH PRIVILEGES;
