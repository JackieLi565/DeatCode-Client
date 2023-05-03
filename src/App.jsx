import React, { useState } from "react";
import axios from "axios";
import CodeBox from "./components/CodeBox";

const bp = "function Sum(a, b) {}";

function App() {
  const submit = async (code) => {
    console.log(code);
    try {
      const req = await axios.post("http://localhost:8080/javascript", {
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
      <CodeBox submit={submit} />
    </>
  );
}
export default App;
