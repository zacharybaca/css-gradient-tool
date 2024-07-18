import "./options.css";


export default function Options(props) {
    
    return (
        <div id="options-container">
            <div id="options-heading-container">
                <h1 id="options-heading">Options</h1>
            </div>
            
            <div id="color-info-container">
                <div id="color-options-container">
                    <h4>Color 1</h4>
                    <h4>{props.color}</h4>
                    <input type="color" name="color1" value={props.color} onChange={props.handleChange}/>
                </div>
            </div>
        </div>
    )
}
