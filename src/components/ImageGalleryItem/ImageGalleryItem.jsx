import { Modal } from "components/Modal/Modal";
import { Component } from "react";
// export const ImageGalleryItem = (({ id, alt, src, modal, onOpen, onClose, isOpen }) => {
//   return (
//     <>
//       <li className="ImageGalleryItem" key={id} onClick={onOpen}>
//         <img className="ImageGalleryItem-image" src={src} alt={alt} />
//       </li>
//       {isOpen && <Modal img={modal} alt={alt} onClose={onClose} />}
//     </>
//   );
//    })
  

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state
    const {picture: {webformatURL, largeImageURL, tags}} = this.props
    return (
      <>
        <img src={webformatURL} alt={tags} onClick={this.openModal} />
        {isModalOpen && (
          <Modal isOpen={isModalOpen} img={largeImageURL} alt={tags} onClose={this.closeModal} />
        )}
      </>
    );
  }
}
  