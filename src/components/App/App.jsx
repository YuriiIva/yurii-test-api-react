import { Component } from "react";
import { fetchImg } from "../../services/Api";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";

class App extends Component {
  state = {
    img: "",
    imgLarge: "",
    images: [],
    loading: false,
    error: null,
    page: 1,
    isLoading: true,
    isModalOpen: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { img, page } = this.state;

    if (prevState.img !== img || prevState.page !== page) {
      this.getImages(img, page);
    }
  }

  getImages = async (img, page) => {
    try {
      const { hits } = await fetchImg(img, page);
      this.setState((prev) => ({
        images: [...prev.images, ...hits],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleSubmit = (searchImg) => {
    this.setState((prev) => ({
      img: searchImg,
      // prev.img !== this.state.img &&
      images: [],
    }));
  };

  onLoadMore = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };

  onClickModal = () => {
    this.setState({ isModalOpen: true });
  };

  render() {
    const { images } = this.state;
    return (
      <>
        <Searchbar input={this.handleSubmit} />
        <ImageGallery
          images={images}
          onClickModal={this.onClickModal}
          isModalOpen={this.isModalOpen}
        />
        {images.length && <Button hendleOnClick={this.onLoadMore} />}
      </>
    );
  }
}

export default App;
