import { Component } from "react";
// import Loader from "react-loader-spinner";
import { fetchImg } from "../../services/Api";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";
import Modal from "../common/Modal/Modal";
import ErrorMsg from "../common/ErrorMsg/ErrorMsg";

import LoaderB from "../common/Loader/Loader";

class App extends Component {
  state = {
    img: "",
    imgLarge: "",
    images: [],

    error: null,
    page: 1,
    isLoading: false,
    isModalOpen: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { img, page } = this.state;

    if (prevState.img !== img || prevState.page !== page) {
      this.getImages(img, page);
    }
  }

  getImages = async (img, page) => {
    this.setState({
      isLoading: true,
      error: null,
    });
    try {
      const { hits } = await fetchImg(img, page);
      this.setState((prev) => ({
        images: [...prev.images, ...hits],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmit = (searchImg) => {
    if (searchImg === this.state.img) return;
    this.setState((prev) => ({
      img: searchImg,
      images: [],
      page: 1,
    }));
  };

  onLoadMore = () => {
    this.setState((prev) => ({
      page: prev.page + 1,
    }));
  };

  onClickModal = (largeImageURL) => {
    this.setState({
      isModalOpen: true,
      imgLarge: largeImageURL,
    });
  };

  onClosesModal = () => {
    this.setState({
      isModalOpen: false,
      imgLarge: "",
    });
  };

  render() {
    const { images, imgLarge, isModalOpen, isLoading, error } = this.state;
    return (
      <>
        <Searchbar input={this.handleSubmit} />

        {error && <ErrorMsg message={error} />}
        <ImageGallery
          images={images}
          onClickModal={this.onClickModal}
          isModalOpen={this.isModalOpen}
        />
        {isLoading && <LoaderB />}
        {images.length > 0 && <Button hendleOnClick={this.onLoadMore} />}
        {isModalOpen && (
          <Modal largeImageURL={imgLarge} onClosesModal={this.onClosesModal} />
        )}
      </>
    );
  }
}

export default App;
