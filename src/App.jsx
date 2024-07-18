import React from "react";
import ToolContainer from "./components/ToolContainer/ToolContainer";
import './App.css'

function App() {
  const [color, setColor] = React.useState("#FF0000");

  function handleChange(e) {
    const {name, value} = e.target;
    setColor(...prevState => ({
      ...prevState,
      [name]: value
    }))
    
  }

  return (
    <div id="app-container">
      <h1 id="main-heading">CSS Gradient Code Generator</h1>
      <ToolContainer color={color} setColor={setColor} handleChange={handleChange}/>
    </div>
  )
}

export default App
