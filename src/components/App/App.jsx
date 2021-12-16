import { Component } from "react";
import { useState, useEffect } from "react";

import { fetchImg } from "../../services/Api";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";
import Modal from "../common/Modal/Modal";
import ErrorMsg from "../common/ErrorMsg/ErrorMsg";

import LoaderB from "../common/Loader/Loader";

const App = () => {
  const [img, setImg] = useState(null);
  const [imgLarge, setImgLarge] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (img === null) return;

    const getImages = async () => {
      setIsLoading(true);
      setError(null);
      console.log(fetchImg);
      try {
        const { hits } = await fetchImg(img, page);
        setImages((prevImg) => [...prevImg, ...hits]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getImages();
  }, [img, page]);

  const handleSubmit = (searchImg) => {
    if (searchImg === img) return;

    setImg(searchImg);
    setImages([]);
    setPage(1);
  };

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const onClickModal = (largeImageURL) => {
    setIsModalOpen(true);
    setImgLarge(largeImageURL);
  };

  const onClosesModal = () => {
    setIsModalOpen(false);
    setImgLarge("");
  };
  return (
    <>
      <Searchbar input={handleSubmit} />

      {error && <ErrorMsg message={error} />}
      <ImageGallery
        images={images}
        onClickModal={onClickModal}
        isModalOpen={isModalOpen}
      />
      {isLoading && <LoaderB />}
      {images.length > 0 && <Button hendleOnClick={onLoadMore} />}
      {isModalOpen && (
        <Modal largeImageURL={imgLarge} onClosesModal={onClosesModal} />
      )}
    </>
  );
};

// componentDidUpdate(prevProps, prevState) {
//     const { img, page } = this.state;

//     if (prevState.img !== img || prevState.page !== page) {
//       this.getImages(img, page);
//     }
//   }
// }
// class App extends Component {
//   state = {
//     img: "",
//     imgLarge: "",
//     images: [],

//     error: null,
//     page: 1,
//     isLoading: false,
//     isModalOpen: false,
//   };

// getImages = async (img, page) => {
//   this.setState({
//     isLoading: true,
//     error: null,
//   });
//   try {
//     const { hits } = await fetchImg(img, page);
//     this.setState((prev) => ({
//       images: [...prev.images, ...hits],
//     }));
//   } catch (error) {
//     this.setState({ error: error.message });
//   } finally {
//     this.setState({ isLoading: false });
//   }
// };

// handleSubmit = (searchImg) => {
//   if (searchImg === this.state.img) return;
//   this.setState((prev) => ({
//     img: searchImg,
//     images: [],
//     page: 1,
//   }));
// };

// onLoadMore = () => {
//   this.setState((prev) => ({
//     page: prev.page + 1,
//   }));
// };

// onClickModal = (largeImageURL) => {
//   this.setState({
//     isModalOpen: true,
//     imgLarge: largeImageURL,
//   });
// };

// onClosesModal = () => {
//   this.setState({
//     isModalOpen: false,
//     imgLarge: "",
//   });
// };

//   render() {
//     const { images, imgLarge, isModalOpen, isLoading, error } = this.state;

//   }
// }

export default App;
