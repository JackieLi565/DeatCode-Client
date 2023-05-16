import React, { useEffect, useState } from "react";
import axios from "axios";
import CodeBox from "../components/CodeBox";
import Sider from "../components/Sider";
import Navbar from "../components/Navbar/index";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
function ProblemPage() {
  const [result, setResult] = useState("");
  const navigate = useNavigate();
  const { isLoading, data } = useQuery({
    queryKey: ["codeData"],
    queryFn: async () => {
      const req = await axios.get("/api/problem/base");
      return req.data;
    },
  });

  if (isLoading) {
    return <>Loading Problem</>;
  }

  const submit = async (code) => {
    try {
      const req = await axios.post("/api/", {
        code,
      });
      const res = req.data;
      console.log(res);
    } catch {
      console.log("Server Error");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen pt-16">
        <Sider data={data} />
        <CodeBox submit={submit} data={data} />
      </div>
    </>
  );
}
export default ProblemPage;
