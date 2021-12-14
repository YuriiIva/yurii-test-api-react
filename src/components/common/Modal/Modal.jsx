import { Component } from "react";
import { createPortal } from "react-dom";

const modalRootRef = document.querySelector("#modal-root");

class Modal extends Component {
  state = {
    isModalOpen: false,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleEsc);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEsc);
  }

  handleEsc = (e) => {
    if (e.code === "Escape") {
      this.onClosesModal();
    }
  };

  onClosesModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClosesModal();
    }
  };

  render() {
    return createPortal(
      <div className="overlay" onClick={this.handleBackdropClick}>
        <div className="modal">
          <img
            src={this.props.largeImageURL}
            alt=""
            onClick={this.props.onClosesModal}
          />
        </div>
      </div>,
      modalRootRef
    );
  }
}

export default Modal;

// const Modal = ({ largeImageURL }) => {
//   return (
//     <div>
//       <div className="overlay">
//         <div className="modal">
//           <img src={largeImageURL} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
