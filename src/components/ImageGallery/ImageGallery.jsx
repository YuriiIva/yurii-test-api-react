import React from "react";
import Modal from "../common/Modal/Modal";

const ImageGallery = ({ images, onClickModal }) => {
  return (
    <div>
      <ul className="gallery">
        {images.map(({ webformatURL, id, largeImageURL }) => (
          <li key={id}>
            <img
              src={webformatURL}
              alt="Foto"
              onClick={() => onClickModal(largeImageURL)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
