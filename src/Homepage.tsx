import { useNavigate } from 'react-router-dom'
import Glossary from './components/Glossary'

export default function Homepage() {
  const navigate = useNavigate()
  return (
    <>
      <div className="App">
        <p>Recipe Book</p>
      </div>
      <div id="button">
        <button className="start-button" onClick={() => navigate('/recipes')}>
          Start
        </button>
      </div>
    </>
  )
}
