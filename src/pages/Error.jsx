import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
function Error() {
  return (
    <>
      <Navbar />
      <section className="h-screen bg-background flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-headline text-[30px]">
            Looks like you have completed today's problem!
          </h1>
        </motion.div>
      </section>
    </>
  );
}

export default Error;
