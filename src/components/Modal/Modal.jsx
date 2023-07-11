export const Modal = ({img, alt, onClose}) => (
  <div className="Overlay">
    <div className="Modal" onClick={onClose}>
      <img src={img} alt={alt} />
    </div>
  </div>
);