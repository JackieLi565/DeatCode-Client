import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { sublime } from "@uiw/codemirror-theme-sublime";

function App() {
  return (
    <>
      <div className="w-screen bg-slate-600 h-screen flex justify-center items-center">
        <CodeMirror
          value="console.log('hello world!');"
          height="200px"
          theme={sublime}
          width="400px"
          extensions={[javascript({ jsx: true })]}
        />
      </div>
    </>
  );
}
export default App;
