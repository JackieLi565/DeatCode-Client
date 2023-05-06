function Example({ input, output, explanation }) {
  return (
    <>
      <h2 className="text-xl">Example:</h2>
      <div className="bg-gray-500 font-bold p-4 rounded space-y-2">
        <h1>{input}</h1>
        <h1>{output}</h1>
        <h1>{explanation}</h1>
      </div>
    </>
  );
}

export default Example;
