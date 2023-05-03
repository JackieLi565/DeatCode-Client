import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { sublime } from "@uiw/codemirror-theme-sublime";
import { useState } from "react";
function CodeBox(props) {
  const [code, setCode] = useState("");

  return (
    <div className="w-screen bg-slate-600 h-screen flex flex-col justify-center items-center">
      <h1 className="m-4 text-gray-200 text-xl">
        Create a function tha returns the sum of two numbers{" "}
      </h1>
      <CodeMirror
        value={code}
        height="200px"
        theme={sublime}
        width="500px"
        extensions={[javascript({ jsx: true })]}
        onChange={(value) => {
          setCode(value);
          console.log(code);
        }}
      />
      <button
        className="m-3 bg-slate-300 h-10 w-32 rounded-md text-xl"
        onClick={() => props.submit(code)}
      >
        Submit
      </button>
    </div>
  );
}

export default CodeBox;
