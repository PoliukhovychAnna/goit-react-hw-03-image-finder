import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery =({pictures}) => {
  return (
    <ul className="ImageGallery">
    {pictures.map((picture) => {
      return <ImageGalleryItem  key={picture.id} picture={picture} />;
    })}
  </ul>
  )
}