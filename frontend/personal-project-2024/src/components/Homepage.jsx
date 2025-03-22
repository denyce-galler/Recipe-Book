import { useState } from "react";
import { Link } from "react-router-dom";

function Homepage(){
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false)


  // const updateName = () => {
  //   setName(e.target.value)
  // }
  const handleSubmit = (event) => {
    event.preventDefault();
    // setName(event.target.value)
    setSubmitted(true);
  }



  return (
    <>
    <div>
      <h1>Recipe Book</h1>
      <h2>Welcome to your personalised recipe book.</h2>
      <h2>Add recipes you love to make and keep making! </h2>
    </div>
    <div>
      <form onSubmit={handleSubmit}>
        Add your name here:
          <input type="text" value={name} placeholder="Enter name" onChange={(e) => setName(e.target.value)}/>
          <button type="submit">Enter</button>
      </form>
      {submitted && <h3>Welcome, {name}!</h3>}
    </div>
    <div>
      <h3>Start making recipes that you love to make! </h3>
      <Link to="/list-recipes">
        <button>
          Start
        </button>
      </Link>
    </div>
    </>
  )
}

export default Homepage;