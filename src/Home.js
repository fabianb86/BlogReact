// Click Events: Creating an event when the user clicks a button

const Home = () => {

  // 01. Create a function that will fire when the user click
  const handleClick = () => {
    console.log('Hello ninjas');
  }

  // 03. Set a function with a parameter, in this case, a name
  const handleClickAgain = (name) => {
    console.log('Hello ' + name)
  }

  return ( 
    <div className="home">
      <h2>Homepage</h2>
      {/* 02. Create the button and set the event onClick */}
      <button onClick={ handleClick }>Click me</button>
      {/* 05. In this new button set the event onClick. The parameter name is into an anonymus function  06. Invoke the function handleClickAgain*/}
      <button onClick={() => handleClickAgain('Mario')}>Click me again</button>
    </div>
  );
}

export default Home;