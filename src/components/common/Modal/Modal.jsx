import { createPortal } from "react-dom";
import { useEffect } from "react";

const modalRootRef = document.querySelector("#modal-root");

const Modal = ({ onClosesModal, largeImageURL }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.code === "Escape") {
        onClosesModal();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClosesModal]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClosesModal();
    }
  };

  return createPortal(
    <div className="overlay" onClick={handleBackdropClick}>
      <div className="modal">
        <img src={largeImageURL} alt="" onClick={onClosesModal} />
      </div>
    </div>,
    modalRootRef
  );
};

export default Modal;
