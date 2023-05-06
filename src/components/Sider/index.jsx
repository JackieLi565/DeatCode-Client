import { useState } from "react";
import Example from "../Example";

function Sider() {
  const [question, setQuestion] = useState("The Question Of the Day");
  return (
    <section className="w-2/5 p-6 bg-slate-600 text-white space-y-3">
      <h1 className="text-2xl">{question}</h1>
      <p>
        Given two numbers create a function in Python that returns the sum of
        the two numbers
      </p>
      <Example input="p1: 2 , p2: 3" output="5" explanation="2 + 3 = 5" />
      <Example input="p1: 2 , p2: 1" output="3" explanation="2 + 1 = 3" />
      <Example input="p1: 2 , p2: 4" output="56" explanation="2 + 4 = 6" />
    </section>
  );
}

export default Sider;
