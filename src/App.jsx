import React from "react";
import ToolContainer from "./components/ToolContainer/ToolContainer";
import './App.css'

function App() {
  const [color, setColor] = React.useState({
    color1: "#FF0000",
    color2: "#FF0000",
    color3: "#FF0000",
    angle: 0
  })

  function handleChange(e) {
    const {name, value} = e.target;
    e.preventDefault();
    console.log('E: ', e.target.name)
    
    setColor(prevState => ({
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
