import Preview from "../Preview/Preview";
import Options from "../Options/Options";
import "./tool-container.css";

export default function ToolContainer(props) {
    return (
        <div id="tool-container">
            <Preview color={props.color} copy={props.copy}/>
            <Options color={props.color} setColor={props.setColor} handleChange={props.handleChange}/>
        </div>
    )
}
