// Using State (useState Hook): Make a value reactive so when it changes, react detects that and it re-renders the template to see this new value in the browser

// 01. Import the useState Hook
import { useState } from "react";

const Home = () => {

  // 02. Set the useState, it means, the initial state (name and age)
  const [name, setName] = useState('mario');
  const [age, setAge] = useState(25);

  // 03. In the function, set the new name and the new age
  const handleClick = () => {
    setName('luigi');
    setAge(30);
  }


  return ( 
    <div className="home">
      <h2>Homepage</h2>
      {/* 04. These are the dynamic values that will change when the user click the button */}
      <p>{ name } is { age } years old</p>
      <button onClick={ handleClick }>Click me</button>
    </div>
  );
}

export default Home;