import { motion } from "framer-motion";

import "./App.css";

function App() {
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <div className="App">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          type: "spring",
        }}
      >
        <motion.h1 variants={item}>Bummelum!</motion.h1>
        <h2>lololololol</h2>
      </motion.div>
    </div>
  );
}

export default App;
