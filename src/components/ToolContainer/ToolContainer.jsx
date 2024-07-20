/* eslint-disable react/prop-types */
import Preview from "../Preview/Preview";
import Options from "../Options/Options";
import "./tool-container.css";

export default function ToolContainer(props) {
    return (
        <div id="tool-container">
            <Preview color={props.color} copy={props.copy} setColor={props.setColor}/>
            <Options color={props.color} setColor={props.setColor} handleChange={props.handleChange} toggle={props.toggle}/>
        </div>
    )
}
