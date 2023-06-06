import Example from "../Example";
import { motion } from "framer-motion";
function Sider({ data }) {
  return (
    <section className="col-span-4  p-3 bg-background space-y-3">
      <motion.main
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-backgroundS p-3 rounded h-full"
      >
        <h1 className="text-2xl text-headline">
          The Question Of the Day: {data.name}
        </h1>
        <p className="text-paragraph">{data.desc}</p>
        {data.ex.map((example, index) => (
          <Example example={example} key={index} />
        ))}
      </motion.main>
    </section>
  );
}

export default Sider;
