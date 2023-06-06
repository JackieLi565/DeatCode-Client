//temp loading screen
import { Oval } from "react-loader-spinner";
import { motion } from "framer-motion";
function Loading() {
  return (
    <section className="h-screen bg-background flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Oval
          height={80}
          width={80}
          color="#D70040"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#2e2f3e"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </motion.div>
    </section>
  );
}

export default Loading;
