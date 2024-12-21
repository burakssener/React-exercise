import logo from './logo.svg';
import './App.css';
import {useState, useEffect } from 'react';




const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect( () => {
    setCounter(100);
    alert('you changed the counter to '+ counter)
  }, [])

  return(
  <div className="App">
    <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
    <h1>{counter}</h1>
    <button  onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
  </div>)

}


/*
Props
const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastname}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )

}

const App = () => {
  return(
  <div className="App">
    <Person name={'Kesis'} lastname={"Sener"} age={12}/>
    <Person age={15}/>
  </div>)

}
*/

/*
Starting

const App = () => {
  
  const name = 'James';
  const isNameShowing = (name != null);
  return (
    <div className="App">
      <h1>Hello {isNameShowing ? name: 'Someone'}</h1>
      {name ? (
        <>
          <h1>I am happy that you came back</h1>
        </>
      ): (
        <>
        <h1>Where is</h1>
        <h2>James</h2>
        </>
      )}
    </div>
  );
}*/

export default App;
