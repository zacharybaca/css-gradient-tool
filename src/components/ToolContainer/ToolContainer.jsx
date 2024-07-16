import Preview from "../Preview/Preview";
import Options from "../Options/Options";
import "./tool-container.css";

export default function ToolContainer() {
    return (
        <div id="tool-container">
            <Preview />
            <Options />
        </div>
    )
}