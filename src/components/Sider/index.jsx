import { useEffect, useState } from "react";
import Example from "../Example";

function Sider() {
  const [question, setQuestion] = useState("The Question Of the Day");
  useEffect(() => {
    //TODO: Fetch challange data
  });
  return (
    <section className="w-2/5 p-3 bg-background space-y-3">
      <main className="bg-backgroundS p-3 rounded h-full">
        <h1 className="text-2xl text-headline">{question}</h1>
        <p className="text-paragraph">
          Given two numbers create a function in Python that returns the sum of
          the two numbers
        </p>
        <Example input="p1: 2 , p2: 3" output="5" explanation="2 + 3 = 5" />
        <Example input="p1: 2 , p2: 1" output="3" explanation="2 + 1 = 3" />
        <Example input="p1: 2 , p2: 4" output="56" explanation="2 + 4 = 6" />
      </main>
    </section>
  );
}

export default Sider;
