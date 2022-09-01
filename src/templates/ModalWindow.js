import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useCallback, useState } from "react";

const ModalWindow = ({
  showModalWindow,
  setShowModalWindow,
  modalContainerAnimation,
  modalContentAnimation,
  alertdialog,
}) => {
  //default animation
  const ContainerAnimation = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 0.5,
    },
  };
  const ContentAnimation = {
    hidden: {
      display: "none",
      opacity: 0,
    },
    show: {
      display: "flex",
      opacity: 1,
    },
  };

  const containerControls = useAnimationControls();
  const contentControls = useAnimationControls();
  const [ariaHidden, setAriaHidden] = useState(false);

  const showSequence = async () => {
    await containerControls.start("show");
    return await contentControls.start("show");
  };
  const hideSequence = async () => {
    contentControls.start("hidden");
    containerControls.start("hidden");
  };

  useEffect(() => {
    if (showModalWindow === true) {
      setAriaHidden(false);
    } else {
      setAriaHidden(true);
    }
  }, [showModalWindow]);

  if (showModalWindow === true) {
    showSequence();
  } else {
    hideSequence();
  }

  const escapeDown = useCallback((event) => {
    if (event.keyCode === 27) {
      setShowModalWindow(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escapeDown, false);
    return () => {
      document.removeEventListener("keydown", escapeDown, false);
    };
  }, []);

  const styles = {
    button: "max-w-max max-h-max bg-gray-500 rounded m-1 p-1 text-xl",
  };

  return (
    <>
      <motion.section
        aria-modal="true"
        role="dialog"
        aria-hidden={ariaHidden}
        className="lightbox w-screen h-screen bg-black absolute top-0"
        variants={
          (modalContainerAnimation && modalContainerAnimation) ||
          ContainerAnimation
        }
        initial="hidden"
        animate={containerControls}
        onClick={(e) => {
          e.target === e.currentTarget && setShowModalWindow(false);
        }}
      ></motion.section>
      <motion.div
        aria-modal="true"
        role="alertdialog"
        aria-hidden={ariaHidden}
        className="m-auto w-72 h-64 z-10 bg-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 justify-between flex-col rounded-md"
        variants={
          (modalContentAnimation && modalContentAnimation) || ContentAnimation
        }
        initial="hidden"
        animate={contentControls}
      >
        <p className="text-black text-center text-2xl p-8 text-bold">
          {alertdialog}
        </p>
        <div className="flex p-2 justify-end w-full">
          <button
            className={styles.button}
            onClick={() => setShowModalWindow(false)}
          >
            Ok
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default ModalWindow;
