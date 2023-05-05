import React from "react";
import axios from "axios";
import CodeBox from "../components/CodeBox";

function ProblemPage() {
  const submit = async (code) => {
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
    <div className="w-full bg-slate-600 flex h-screen flex-col justify-center items-center">
      <CodeBox submit={submit} />
    </div>
  );
}
export default ProblemPage;
