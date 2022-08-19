import { motion, useAnimationControls } from "framer-motion";

const ModalWindow = ({
  modalWindow,
  setModalWindow,
  modalContainer,
  modalContent,
}) => {
  const containerControls = useAnimationControls();
  const contentControls = useAnimationControls();

  const showSequence = async () => {
    await containerControls.start("show");
    return await contentControls.start("show");
  };
  const hideSequence = async () => {
    contentControls.start("hidden");
    containerControls.start("hidden");
  };

  if (modalWindow === true) {
    showSequence();
  } else {
    hideSequence();
  }

  return (
    <>
      <motion.section
        className="lightbox w-screen h-screen bg-black absolute top-0"
        variants={modalContainer}
        initial="hidden"
        animate={containerControls}
        onClick={(e) => {
          if (e.target.classList.contains("lightbox")) {
            setModalWindow(false);
          }
        }}
      ></motion.section>
      <motion.div
        className="block m-auto w-72 h-64 z-10 bg-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4"
        variants={modalContent}
        initial="hidden"
        animate={contentControls}
      >
        <p className="text-black">This is a modal window</p>
        <button
          className="text-white w-12 h-6 bg-black bottom-2 right-2"
          onClick={() => setModalWindow(false)}
        >
          Ok
        </button>
      </motion.div>
    </>
  );
};

export default ModalWindow;
