
import Navbar from './Navbar'
import Home from './Home'

function App() {

  // const title="Welcome to the new Blog"
  // const likes=50;
  // const person = {name:'Nikhil',age:'22'};
  // const link ="http://www.youtube.com"

  return (
    <div className="App">

      {/* <h1>{title}</h1>
      <p>Liked {likes} times..</p>
      <p>{person.name} is {person.age} years old</p>
      <p>{10}</p>
      <p>{"Hello Ninjas"}</p>
      <p>{[1,2,3]}</p>
      <p>{Math.random()*10}</p>
      <a href={link}>Youtube</a> */}

        <Navbar/>

        <div className="content">
          {/* <h1>App Component</h1> */}
          <Home/>
        </div>

        
    </div>
  );
}

export default App;
