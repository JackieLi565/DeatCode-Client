import React, { useEffect, useState } from "react";
import axios from "axios";
import CodeBox from "../components/CodeBox";
import Sider from "../components/Sider";
import Navbar from "../components/Navbar/index";
import { useQuery } from "react-query";
function ProblemPage() {
  const [result, setResult] = useState("");
  const [userStatus, setUserStatus] = useState(); // true if done a problem already
  const [time, setTime] = useState("5:10:20");

  const { isLoading, data } = useQuery({
    queryKey: ["codeData"],
    queryFn: async () => {
      const req = await axios.get("/api/problem/base");
      return req.data;
    },
  });

  if (userStatus) {
    return (
      <>
        You have done a problem already please wait until tmrw{" "}
        <div>Next avaliable problem: {time}</div>
      </>
    );
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
        <Sider />
        <CodeBox submit={submit} />
      </div>
    </>
  );
}
export default ProblemPage;
