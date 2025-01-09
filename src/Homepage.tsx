import { useNavigate } from 'react-router-dom'
import Glossary from './components/Glossary'

export default function Homepage() {
  const navigate = useNavigate()
  return (
    <>
      <div className="App">
        <h1>Recipe Book</h1>
      </div>
      <div id="slogan">
        <p>Add your favourite recipes and remember them</p>
      </div>
      <div id="button">
        <button className="start-button" onClick={() => navigate('/recipes')}>
          Start
        </button>
      </div>
    </>
  )
}
