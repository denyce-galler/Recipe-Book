import { useState, useEffect } from "react"
import axios from 'axios'


function Recipes(){
  const [data, setData] = useState("")

  useEffect(()=>{
    axios.get('/api/data').then(res => {setData(res.data.data)})
  },[])

  return(
    <h1>{data}</h1>
  )
}

export default Recipes;