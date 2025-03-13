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

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"Rd8F6Z5g%7d@RLexF2dC",
  database:"recipe_book"
})


app.get('/recipes', (req,res) => {
  const q = "SELECT * FROM recipe"
  db.query(q,(err,data)=>{
    if(err) return res.json(err)
      return res.json(data)
  })
})

app.post('/recipes',(req,res) => {
  const q = "INSERT INTO recipe (`recipe_name`,`date_created`) VALUES (?)"
  const values = [
    req.body.recipe_name,
    req.body.date_created,
  ]
  db.query(q,[values], (err,data)=>{
    if(err) return res.json(err)
    return res.json("recipe has been created")
  })
})


app.listen(5001, ()=> {
  console.log("Server is running")})

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Rd8F6Z5g%7d@RLexF2dC' FLUSH PRIVILEGES;
