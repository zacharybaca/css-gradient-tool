import "./preview.css";

export default function Preview(props) {

    const value = {
        background: `background: linear-gradient(${props.color.angle}deg, ${props.color.color1}, ${props.color.color2}),
        -moz-background': linear-gradient(${props.color.angle}deg, ${props.color.color1}, ${props.color.color2}),
        -webkit-background': linear-gradient(${props.color.angle}deg, ${props.color.color1}, ${props.color.color2}),
        
        // for 3 color inputs
        background: linear-gradient(${props.color.angle}deg, ${props.color.color1}, ${props.color.color2}, ${props.color.color3})`
    };
    
    return (
        <div id="preview-container">
            <div id="gradient-preview-container">
                <div id="gradient" style={{background: `linear-gradient(${props.color.angle}deg, ${props.color.color1}, ${props.color.color2}, ${props.color.color3})`}}>

                </div>
            </div>
            <div id="generated-code-container">
                <textarea id="generated-code" value={value.background} readOnly>
                   
                </textarea>
            </div>
        </div>
    )
}
