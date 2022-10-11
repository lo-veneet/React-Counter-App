/* eslint-disable no-unused-vars */
import './App.css';
//class component
import { useState } from "react"
function App() {
  const[count, setCount] = useState(0);
const handleSubtract = () =>{
  setCount(count-1);
};
const handleReset = () =>{
  setCount(0);
};
const handleAddition = () =>{
  setCount(count+1);
};
  return (
    <section className="counter-sec">
      <div className="container counter">
        
        <h1> React Counter App</h1>
        <p className="count"> {count}</p>
        <div className="buttons">
          <button className="btn1"onClick ={handleSubtract}> - subtraction </button>
          <button className="btn2"onClick ={handleReset}> ! Reset </button>
          <button className="btn3"onClick ={handleAddition}> + Addition </button>
        </div>
      </div>
    </section>
  );
}

export default App;
