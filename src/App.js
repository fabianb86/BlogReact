// Dynamic Values in Templates: We can create variables in order to display at the template.

import './App.css';

function App() {
  // You can type any javascript inside the function before the return
  // 01. Create variables: NOTE: The component don't accept booleans and objects.
  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = 'http://www.google.com';


  return (
    <div className="App">
      <div className="content">
        {/* 02. Import the dynamic value "title" and it will display at the browser */}
        <h1>{ title }</h1>
        <p>Liked: { likes } times</p>
        <a href={ link }>Google Site</a>

        {/* 03. We can also put the directly JS into the dynamic value here between the curly braces */}

        <p>{ 10 }</p>
        <p>{ "Hello everybody" }</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random() * 10 }</p>
        
      </div>
    </div>
  );
}

export default App;
