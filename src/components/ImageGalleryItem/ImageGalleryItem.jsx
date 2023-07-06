export const ImageGalleryItem = (({ id, alt, src }) => {
  return (
    <li className="ImageGalleryItem" key={id}>
      <img
        className="ImageGalleryItem-image"
        src={src}
        alt={alt}
      />
    </li>
  );
   })
  
  