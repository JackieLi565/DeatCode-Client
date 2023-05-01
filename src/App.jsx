import React, { useState } from "react";
import axios from "axios";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { sublime } from "@uiw/codemirror-theme-sublime";

const bp = "function Sum(a, b) {}";

function App() {
  const [code, setCode] = useState(bp);

  const submit = async () => {
    try {
      const req = await axios.post("http://localhost:80/javascript", {
        code: code,
      });
      const res = req.data;
      console.log(res);
    } catch {
      console.log("Server Error");
    }
  };

  return (
    <>
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
          onClick={submit}
        >
          Submit
        </button>
      </div>
    </>
  );
}
export default App;
