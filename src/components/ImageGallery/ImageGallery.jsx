import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery =({pictures, onOpenModal, onCloseModal, isOpen}) => {
  return (
    <ul className="ImageGallery">
    {pictures.map(({ id, tags, webformatURL, largeImageURL }) => {
      return <ImageGalleryItem isOpen={isOpen} onOpen={onOpenModal} onClose={onCloseModal} key={id} alt={tags} src={webformatURL} modal={largeImageURL} />;
    })}
  </ul>
  )
}