import React, { useEffect, useState } from "react";
import axios from "axios";
import CodeBox from "../components/CodeBox";
import Sider from "../components/Sider";

function ProblemPage() {
  const [result, setResult] = useState("");
  const [userStatus, setUserStatus] = useState(); // true if done a problem already
  const [time, setTime] = useState("5:10:20");

  useEffect(() => {
    // send ajax to check if the user has done a problem
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
    <div className="flex h-screen pt-20">
      <Sider />
      <CodeBox submit={submit} />
    </div>
  );
}
export default ProblemPage;
