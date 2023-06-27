import React, { useState } from "react";
import axios from "axios";
import CodeBox from "../components/CodeBox";
import Sider from "../components/Sider";
import Navbar from "../components/Navbar/index";
import { useQuery } from "react-query";
import Loading from "../components/Status/Loading";
import Success from "../components/Status/Success";
import { useNavigate } from "react-router-dom";

function ProblemPage() {
  const [result, setResult] = useState(false);
  const navigate = useNavigate();
  const [consoleData, setConsole] = useState(["Connected to Server"]);
  const { isLoading, data, isError } = useQuery({
    queryKey: "problem",
    queryFn: async () => {
      const req = await axios.get("/api/problem/base");
      return req.data;
    },
    retry: 1,
  });

  if (isError) {
    navigate("/Completed");
  }
  if (isLoading) {
    return <Loading />;
  }

  const submit = async (code) => {
    try {
      await axios.post("/api/python", {
        code,
        problem: data.name,
        problemID: data._id,
        rating: data.difficulty,
      });
      setResult(true);
    } catch (e) {
      setConsole((prev) => [...prev, e.response.data.Error.traceback]);
    }
  };

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-10 h-screen pt-16">
        {result ? (
          <Success />
        ) : (
          <>
            <Sider data={data} />
            <CodeBox submit={submit} data={data} console={consoleData} />
          </>
        )}
      </div>
    </>
  );
}
export default ProblemPage;
