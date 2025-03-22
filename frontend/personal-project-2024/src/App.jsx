import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import AddRecipe from './components/AddRecipe';
import ListRecipes from './components/ListRecipes';
import AddIngredient from './components/AddIngredient';
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route exact path = "/" element={<Homepage/>}/>
        <Route path = "/list-recipes" element={<ListRecipes/>}/>
        <Route path = "/add-recipe" element={<AddRecipe/>}/>
        <Route path = "/add-ingredient" element={<AddIngredient/>}/>
      </Routes>
    </Router>
   </>
  );
}

export default App;

/* <Route path ="/recipes" element={<Recipes/>} /> */