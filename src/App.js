import { motion } from "framer-motion";
import { useState } from "react";

import "./App.css";
import ModalWindow from "./templates/ModalWindow";

function App() {
  const [modalWindow, setModalWindow] = useState(false);

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

  const modalContainer = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 0.5,
    },
  };
  const modalContent = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  return (
    <>
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
      <button onClick={() => setModalWindow(true)}>Test modal window</button>
      <ModalWindow
        modalWindow={modalWindow}
        setModalWindow={setModalWindow}
        modalContainer={modalContainer}
        modalContent={modalContent}
      />
    </>
  );
}

export default App;
