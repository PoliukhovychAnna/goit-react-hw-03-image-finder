import { Component, React } from 'react';
import { WrapperApp } from './Styled.App';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { getPictures } from 'services/api';
import { Button } from '../Button/Button';
import { EmptyMessage } from 'components/Loader/Styled.loader';

export class App extends Component {
  abortCtrl;

  state = {
    page: 1,
    searchValue: '',
    pictures: [],
    isLoading: false,
    error: null,
    isShowButton: false,
    isEmpty: false,
    per_page: 12,
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
    if (this.abortCtrl) {
      this.abortCtrl.abort();
    }

    this.abortCtrl = new AbortController(); 

    this.setState({ isLoading: true });

    try {
      const { total, hits } = await getPictures(
        query,
        currentPage,
        this.abortCtrl.signal
      );

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
     window.scrollBy({
       top: 260 * 2,
       behavior: 'smooth',
     })

    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  render() {
    const { pictures, isLoading, isEmpty, isShowButton } = this.state;
    return (
      <WrapperApp>
        <Searchbar onSubmit={this.handleSearch} />
        {isEmpty && <EmptyMessage>There are no pictures here!</EmptyMessage>}
        {isLoading && 'Loading...'}
        {pictures && <ImageGallery pictures={pictures} />}
        {isShowButton && <Button onClick={this.handleClickBtn} />}
      </WrapperApp>
    );
  }
}
