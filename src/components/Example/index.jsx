function Example({ example }) {
  return (
    <>
      <h2 className="text-xl text-third py-2">Example:</h2>
      <div className="bg-background text-paragraph font-bold p-4 rounded space-y-2">
        <div className="flex space-x-2">
          {example.params.map((param, key) => (
            <h1 key={key}>
              Param[{key}]: {param}
            </h1>
          ))}
        </div>
        <h1>{example.proof}</h1>
        <h1>Solution: {example.solution}</h1>
      </div>
    </>
  );
}

export default Example;
