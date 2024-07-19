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

  async function copy(text) {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      }
    } catch (err) {
      console.error(err);
    }
  }
  
  function handleChange(e) {
    const {name, value} = e.target;
    e.preventDefault();
    console.log('E: ', e.target.name)
    
    setColor(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  React.useEffect(() => {
    setColor(prevState => ({
      ...prevState,
      color: {
        color1: color.color1,
        color2: color.color2,
        color3: color.color3
      }
    }))
  }, [])

  return (
    <div id="app-container">
      <h1 id="main-heading">CSS Gradient Code Generator</h1>
      <ToolContainer color={color} setColor={setColor} copy={copy} handleChange={handleChange}/>
    </div>
  )
}

export default App
