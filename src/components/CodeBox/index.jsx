import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { sublime } from "@uiw/codemirror-theme-sublime";
import { useState } from "react";

function CodeBox({ submit, data }) {
  const [code, setCode] = useState(`/*
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
  
${data.bpCode}
  
  `);

  return (
    <section className="w-3/5 p-3 bg-background ">
      <main className="p-3 bg-backgroundS rounded h-full relative">
        <div className="space-x-4">
          <button
            className="mb-4 bg-button text-headline px-6 py-1 rounded text-xl"
            onClick={() => submit(code)}
          >
            Submit
          </button>
          <button
            className="mb-4 bg-button text-headline px-6 py-1 rounded text-xl"
            onClick={() => submit(code)}
          >
            Test
          </button>
        </div>

        <div class="max-h-[600px] overflow-y-auto">
          <CodeMirror
            value={code}
            theme={sublime}
            extensions={[javascript()]}
            onChange={(value) => {
              setCode(value);
              console.log(code);
            }}
            className="w-full overflow"
          />
        </div>

        <div className="bg-background p-2 mt-6 rounded h-1/5 w-full bottom-4 ">
          <h1 className="text-headline">Console: </h1>
          <div className="text-paragraph"> sample code fdjklsdfjslak</div>
        </div>
      </main>
    </section>
  );
}

export default CodeBox;
