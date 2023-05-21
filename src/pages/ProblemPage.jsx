import React, { useState } from "react";
import axios from "axios";
import CodeBox from "../components/CodeBox";
import Sider from "../components/Sider";
import Navbar from "../components/Navbar/index";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Error from "./Error";

function ProblemPage() {
  const [result, setResult] = useState("");
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["codeData"],
    queryFn: async () => {
      const req = await axios.get("/api/problem/base");
      return req.data;
    },
  });

  if (isError) {
    return <Error msg={error.message} />;
  }
  if (isLoading) {
    return <Loading />;
  }

  const submit = async (code) => {
    try {
      console.log(code);
      await axios.post("/api/python", {
        code,
        problem: data.name,
        priblemID: data._id,
      });
    } catch (e) {
      console.log("Server Error", e);
    }
  };

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-10 h-screen pt-16">
        <Sider data={data} />
        <CodeBox submit={submit} data={data} />
      </div>
    </>
  );
}
export default ProblemPage;
