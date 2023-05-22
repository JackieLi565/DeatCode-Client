// temp error page
function Error({ msg }) {
  return (
    <section className="h-screen pt-16 bg-background">{`<Error>: ${msg}`}</section>
  );
}

export default Error;
