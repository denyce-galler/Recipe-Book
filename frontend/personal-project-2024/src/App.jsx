import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import Recipes from './components/Recipes';
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route exact path ="/" element={<Homepage/>}/>
        <Route path ="/recipes" element={<Recipes/>} />
      </Routes>
    </Router>
   </>
  );
}

export default App;
