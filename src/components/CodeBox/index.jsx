import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { sublime } from "@uiw/codemirror-theme-sublime";
import { useState } from "react";
import { motion } from "framer-motion";
function CodeBox({ submit, data, console }) {
  const [code, setCode] = useState(`"""
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
""" 
  
${data.bpCode}
  
  `);

  return (
    <section className="col-span-6  p-3 bg-background ">
      <motion.main
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-3 bg-backgroundS rounded relative"
      >
        <div className="space-x-4">
          <button
            className="mb-4 bg-button text-headline px-6 py-1 rounded text-xl"
            onClick={() => submit(code)}
          >
            Submit
          </button>
        </div>
        <div className="grid grid-rows-3">
          <div class="h-[535px] overflow-y-auto row-span-2">
            <CodeMirror
              value={code}
              theme={sublime}
              extensions={[javascript()]}
              onChange={(value) => {
                setCode(value);
              }}
              className="w-full overflow"
            />
          </div>

          <div className="bg-background overflow-y-auto h-[243px] p-2 mt-6 rounded w-full bottom-4 row-span-1 ">
            <h1 className="text-headline">Console: </h1>
            {console.map((msg, index) => (
              <p key={index} className="text-paragraph pt-2">
                {msg}
              </p>
            ))}
          </div>
        </div>
      </motion.main>
    </section>
  );
}

export default CodeBox;
