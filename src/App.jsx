import React from "react";
import ToolContainer from "./components/ToolContainer/ToolContainer";
import './App.css'

function App() {
  const [color, setColor] = React.useState({
    color1: "#FF0000",
    color2: "#FF0000",
    color3: null,
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

  function showAndHide(element) {
    let pickedElement = document.getElementById(element);
    let showAndHideButton = document.getElementById('showAndHide');
    
    if (!pickedElement || !showAndHideButton) {
      return undefined;
    }
  
    showAndHideButton.innerText = '➕';
  
    if (pickedElement.style.display === 'none') {
      pickedElement.style.display = 'flex';
      pickedElement.style.justifyContent = 'space-between';
      setColor(prevState => ({
        ...prevState,
        color: {
          color1: prevState.color.color1,
          color2: prevState.color.color2,
          color3: "#FF0000",
          angle: prevState.color.angle
        }
      }));
      console.log('Color 3 - Flex Display: ', color.color3);
      showAndHideButton.innerText = '➖';
    } else {
      pickedElement.style.display = 'none';
      setColor(prevState => ({
        ...prevState,
        color: {
          color1: prevState.color.color1,
          color2: prevState.color.color2,
          color3: null,
          angle: prevState.color.angle
        }
      }));
      console.log('Color 3 - No Display: ', color.color3);
      showAndHideButton.innerText = '➕';
    }
  }
  
  function handleChange(e) {
    const {name, value} = e.target;
    e.preventDefault();
    
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
        color3: color.color3,
        angle: color.angle
      }
    }))
  }, [color.color1, color.color2, color.color3, color.angle])

  return (
    <div id="app-container">
      <h1 id="main-heading">CSS Gradient Code Generator</h1>
      <ToolContainer color={color} setColor={setColor} copy={copy} handleChange={handleChange} toggle={showAndHide}/>
    </div>
  )
}

export default App
