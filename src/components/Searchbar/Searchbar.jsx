import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';


export class Searchbar extends Component {
  state = {
    value: '',
    };
    

    handleSubmit = (e) => {
        e.preventDefault()
        const value = this.state.value;
        
        this.props.onSubmit(value)
        this.setState({ value: ''});
    };

    handleChange = ({target:{value}}) => {
        this.setState({value})
    }

    render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <BsSearch size="2em" />
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input "
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
    }
    
};
