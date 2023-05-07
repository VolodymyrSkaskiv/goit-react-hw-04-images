import { useEffect } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

export const Modal = ({ closeModal, largeImageURL }) => {
  // реєструє обробник події keydown на вікні браузера
  useEffect(() => {
    const keyDown = evt => {
      if (evt.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', keyDown);

    return () => {
      window.removeEventListener('keydown', keyDown);
    };
  }, [closeModal]);

  return (
    <div onClick={closeModal} className={css.Overlay}>
      <div className={css.Modal}>
        <img className={css.modal__img} src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func,
  largeImageURL: PropTypes.string,
};
