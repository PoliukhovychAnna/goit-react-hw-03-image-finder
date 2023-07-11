import { Component, React } from "react"
import Modal from 'react-modal';
import { Searchbar } from "./Searchbar/Searchbar"
import { ImageGallery } from "./ImageGallery/ImageGallery"
import { getPictures } from "services/api";
import { Button } from "./Button/Button";

Modal.setAppElement('#root');
const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;


export class App extends Component {
  state = {
    page: 1,
    searchValue: '',
    pictures: [],
    isLoading: false,
    error: null,
    isShowButton: false,
    isEmpty: false,
    per_page: 12,
    modalIsOpen: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchValue, page } = this.state;
    if (prevState.searchValue !== searchValue || prevState.page !== page) {
      this.searchPictures(searchValue, page);
    }
  }

  handleSearch = value => {
    this.setState({
      searchValue: value,
      page: 1,
      pictures: [],
      isShowButton: false,
    });
  };

  searchPictures = async (query, currentPage) => {
    this.setState({ isLoading: true });
    try {
      const { total, hits } = await getPictures(query, currentPage);

      this.setState(prevState => ({
        pictures: [...prevState.pictures, ...hits],
        isShowButton: currentPage < Math.ceil(total / this.state.per_page),
        isEmpty: false,
      }));

      if (!total) {
        this.setState({ isEmpty: true });
        return;
      }

      this.setState(prevState => ({
        pictures: [...prevState.pictures, ...hits],
        isShowButton: currentPage < Math.ceil(total / this.state.per_page),
        isEmpty: false,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleClickBtn = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const { pictures, isLoading, isEmpty, isShowButton, modalIsOpen } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
        {isEmpty && 'There are no pictures here!'}
        {isLoading && 'Loading...'}
        {pictures && <ImageGallery pictures={pictures} onOpenModal={this.openModal} onCloseModal={this.closeModal} isOpen={modalIsOpen} />}
        {isShowButton && <Button onClick={this.handleClickBtn} />}
      </>
    );
  }
}

