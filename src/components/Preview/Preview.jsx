/* eslint-disable react/prop-types */
import "./preview.css";

export default function Preview(props) {
    let generatedCode = document.getElementById('generated-code');
    
    return (
        <div id="preview-container">
            <div id="gradient-preview-container">
                <div id="gradient" style={{ background: props.color.color3 !== null ? `linear-gradient(${props.color.angle}deg, ${props.color.color1}, ${props.color.color2}, ${props.color.color3})` : `linear-gradient(${props.color.angle}deg, ${props.color.color1}, ${props.color.color2})` }}>
                </div>
            </div>
            <div id="generated-code-container">
                <textarea 
                    id="generated-code" 
                    value={
                        props.color.color3 !== null ? `background: linear-gradient(${props.color.angle}deg, ${props.color.color1}, ${props.color.color2}, ${props.color.color3}),
                        -moz-background: linear-gradient(${props.color.angle}deg, ${props.color.color1}, ${props.color.color2}, ${props.color.color3}),
                        -webkit-background: linear-gradient(${props.color.angle}deg, ${props.color.color1}, ${props.color.color2}, ${props.color.color3})` :  
                        // for 3 color inputs
                        `background: linear-gradient(${props.color.angle}deg, ${props.color.color1}, ${props.color.color2}),
                        -moz-background: linear-gradient(${props.color.angle}deg, ${props.color.color1}, ${props.color.color2}),
                        -webkit-background: linear-gradient(${props.color.angle}deg, ${props.color.color1}, ${props.color.color2})`} 
                        readOnly 
                    />
            </div>
            <div id="button-container">
                <button type="button" id="copy" onClick={() => props.copy(generatedCode.value)}>Copy Code</button>
            </div>
        </div>
    )
}
