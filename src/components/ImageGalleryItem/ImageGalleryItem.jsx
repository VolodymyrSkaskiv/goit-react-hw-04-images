import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, largeImageURL, openModal }) => (
  <li className={css.galleryItem}>
    <img
      loading="lazy"
      className={css.ImageGalleryItem}
      src={webformatURL}
      alt=""
      onClick={() => openModal(largeImageURL)}
    />
  </li>
);

// типизація пропсів
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  openModal: PropTypes.func,
};

export default ImageGalleryItem;
