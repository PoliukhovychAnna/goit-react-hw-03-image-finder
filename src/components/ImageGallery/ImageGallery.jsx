import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery =({pictures}) => {
  return (
    <ul className="ImageGallery">
    {pictures.map(({ id, tags, webformatURL }) => {
      return <ImageGalleryItem key={id} alt={tags} src={webformatURL} />;
    })}
  </ul>
  )
}