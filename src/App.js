import { motion } from "framer-motion";
import { useState } from "react";

import "./App.css";
import ConfirmModal from "./templates/ConfirmModal";
import ModalWindow from "./templates/ModalWindow";

function App() {
  const [showModalWindow, setShowModalWindow] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState();

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

  const modalContainerAnimation = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 0.5,
    },
  };
  const modalContentAnimation = {
    hidden: {
      display: "none",
      opacity: 0,
    },
    show: {
      display: "flex",
      opacity: 1,
    },
  };

  console.log(isConfirmed);

  return (
    <>
      <div className="App m-auto max-w-max max-h-max text-center">
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
          <motion.h1 variants={item}>I'm animated!</motion.h1>
          <h2>I get my animation from my parent!</h2>
        </motion.div>
      </div>

      <div className="flex w-64 mx-auto my-32">
        <button
          className="max-w-max max-h-max mx-auto my-4"
          onClick={() => setShowModalWindow(true)}
        >
          Test modal window
        </button>
        <ModalWindow
          showModalWindow={showModalWindow}
          setShowModalWindow={setShowModalWindow}
          modalContainerAnimation={modalContainerAnimation}
          modalContentAnimation={modalContentAnimation}
          alertdialog="hello world this is a modal window"
        />

        <button
          className="max-w-max max-h-max mx-auto my-4"
          onClick={() => setShowConfirmModal(true)}
        >
          Test confirm modal
        </button>
        <ConfirmModal
          showConfirmModal={showConfirmModal}
          setShowConfirmModal={setShowConfirmModal}
          confirmMessage="Are you sure?"
          setIsConfirmed={setIsConfirmed}
        />
      </div>
      <div className="flex w-64 mx-auto my-32">
        <p>confirm is </p>
        <p>{isConfirmed}</p>
      </div>
    </>
  );
}

export default App;
