import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { sublime } from "@uiw/codemirror-theme-sublime";
import { useState } from "react";
function CodeBox(props) {
  const [code, setCode] = useState(
    `/*
    Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown 
    printer took a galley of type and scrambled it to make a 
    type specimen book. It has survived not only five centuries, 
    but also the leap into electronic typesetting, remaining 
    essentially unchanged. It was popularised in the 1960s with 
    the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus 
    PageMaker including versions of Lorem Ipsum.
*/ 

function WelcomeToDeatCode(param1: string, param2:string {

});

`
  );

  return (
    <section className="w-3/5 p-6 bg-slate-700 ">
      <div className="space-x-4">
        <button
          className="mb-4 bg-slate-300 px-6 py-1 rounded text-xl"
          onClick={() => props.submit(code)}
        >
          Submit
        </button>
        <button
          className="mb-4 bg-slate-300 px-6 py-1 rounded text-xl"
          onClick={() => props.submit(code)}
        >
          Test
        </button>
      </div>
      <CodeMirror
        value={code}
        theme={sublime}
        extensions={[javascript({ jsx: true })]}
        onChange={(value) => {
          setCode(value);
          console.log(code);
        }}
        className="w-full "
      />
      <div className="bg-gray-900 text-white mt-2 h-36 w-full bottom-4 ">
        result
      </div>
    </section>
  );
}

export default CodeBox;
