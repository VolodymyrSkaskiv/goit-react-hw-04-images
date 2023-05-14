import { useEffect } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ onCloseModal, largeImage, tags }) => {
  // реєструє обробник події keydown на вікні браузера
  useEffect(() => {
    const keyDown = evt => {
      if (evt.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', keyDown);

    return () => {
      window.removeEventListener('keydown', keyDown);
    };
  }, [onCloseModal]);

  const handleCloseBackdrop = evt => {
    if (evt.currentTarget === evt.target) {
      onCloseModal();
    }
  };

  return (
    <div onClick={handleCloseBackdrop} className={css.Overlay}>
      <div className={css.Modal}>
        <img
          className={css.modal__img}
          src={largeImage}
          alt={tags}
          width="1000"
        />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
  tags: PropTypes.string,
};

export default Modal;
