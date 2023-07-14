import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');
const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

// const customStyles = {
//   overlay: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     width: '100vw',
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.8)',
//     zIndex: 1200,
//   },
//   content: {
//     backgroundColor: 'transparent',
//     maxWidth: 'calc(100vw - 48px)',
//     maxHeight: 'calc(100vh - 24px)',
//     padding: 0,
//     border: 'none',
//     position: 'static',
//     borderRadius: 0,
//     overflow: 'hidden',
//   },
// };

export const Modal = ({ isOpen, img, alt, onClose }) => (
  <div className="Overlay">
    <div
      className="Modal"
      isOpen={isOpen}
      onRequestClose={onClose}
      onClick={onClose}
      onAfterOpen={() => disableBodyScroll(document)}
      onAfterClose={() => enableBodyScroll(document)}
    >
      <img src={img} alt={alt} />
    </div>
  </div>
);
