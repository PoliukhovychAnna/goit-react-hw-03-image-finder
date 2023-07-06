import { Component } from "react"
import { Searchbar } from "./Searchbar/Searchbar"
import { ImageGallery } from "./ImageGallery/ImageGallery"
import { getPictures } from "services/api";
import { Button } from "./Button/Button";


export class App extends Component {
  state = {
    page: 1,
    searchValue: '',
    pictures: [],
    isLoading: false,
    error: null,
    isShowButton: false,
    isEmpty: true,
    per_page: 12,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchValue, page } = this.state;
    if (prevState.searchValue !== searchValue || prevState.page !== page) {
      this.searchPictures(searchValue, page);
    }
  }

  handleSearch = value => {
    this.setState({ searchValue: value, page: 1, pictures: [], isShowButton: false});
  };

  searchPictures = async (query, currentPage) => {
    this.setState({ isLoading: true, isEmpty: false });
    try {
      const { total, hits } = await getPictures(query, currentPage);

      this.setState(prevState => ({
        pictures: [...prevState.pictures, ...hits],
        isShowButton: currentPage < Math.ceil(total / this.state.per_page),
        isEmpty: false,
      }));

      if (!this.state.pictures) {
        this.setState({ isEmpty: true });
        return;
      }
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

  render() {
    const { pictures, isLoading, isEmpty, isShowButton } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
        {isEmpty && 'There are no pictures here!'}
        {isLoading && 'Loading...'}
        {pictures && <ImageGallery pictures={pictures} />}
        {isShowButton && <Button onClick={this.handleClickBtn} />}
      </>
    );
  }
}

