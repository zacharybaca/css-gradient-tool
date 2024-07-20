/* eslint-disable react/prop-types */
import "./options.css";


export default function Options(props) {
    
    return (
        <div id="options-container">
            <div id="options-heading-container">
                <h1 id="options-heading">Options</h1>
            </div>
            
            <div id="color-info-container">
                <div id="color-options-container">
                    <div id="color-one">
                        <h4>Color 1</h4>
                        <h4>{props.color.color1}</h4>
                        <input type="color" name="color1" value={props.color1} onChange={props.handleChange}/>
                    </div>
                   <div id="color-two">
                        <h4>Color 2</h4>
                        <h4>{props.color.color2}</h4>
                        <input type="color" name="color2" value={props.color2} onChange={props.handleChange} />
                   </div>
                   <div id="color-three">
                        <h4>Color 3</h4>
                        <h4>{props.color.color3}</h4>
                        <input type="color" name="color3" value={props.color3} onChange={props.handleChange} />
                   </div>
                   <div id="angle">
                        <h4>Angle</h4>
                        <input type="number" name="angle" value={props.angle} onChange={props.handleChange} />
                        <button id="showAndHide" onClick={() => props.toggle('color-three')}>➕</button>
                   </div>
                </div>
            </div>
        </div>
    )
}
