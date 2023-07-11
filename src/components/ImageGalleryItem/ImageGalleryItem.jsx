import { Modal } from "components/Modal/Modal";
export const ImageGalleryItem = (({ id, alt, src, modal, onOpen, onClose, isOpen }) => {
  return (
    <>
      <li className="ImageGalleryItem" key={id} onClick={onOpen}>
        <img className="ImageGalleryItem-image" src={src} alt={alt} />
      </li>
      {isOpen && <Modal img={modal} alt={alt} onClose={onClose} />}
    </>
  );
   })
  
  