import { Component } from "react";
import { getPictures }  from 'api';

export class ImageGallery extends Component {
  state = {
    
  }
    
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.valueToSearch !== this.props.valueToSearch) {
      getPictures(this.props.valueToSearch).then(
        resp => console.log(resp)
      );
        
      }
    }
  render() {
    return (
      <ul className="gallery">{/* <!-- Набір <li> із зображеннями --> */}</ul>
    );
    }
}