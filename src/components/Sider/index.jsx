import Example from "../Example";

function Sider({ data }) {
  return (
    <section className="w-2/5 p-3 bg-background space-y-3">
      <main className="bg-backgroundS p-3 rounded h-full">
        <h1 className="text-2xl text-headline">
          The Question Of the Day: {data?.name}
        </h1>
        <p className="text-paragraph">{data?.desc}</p>
        {data.ex?.map((example, index) => (
          <Example example={example} key={index} />
        ))}
      </main>
    </section>
  );
}

export default Sider;
