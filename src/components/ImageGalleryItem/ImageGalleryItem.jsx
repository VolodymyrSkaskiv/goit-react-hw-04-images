import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({
  webformatURL,
  tags,
  largeImageURL,
  onOpenModal,
}) => (
  <li className={css.galleryItem}>
    <img
      loading="lazy"
      className={css.ImageGalleryItem}
      src={webformatURL}
      alt={tags}
      onClick={() => onOpenModal(largeImageURL)}
    />
  </li>
);

// типизація пропсів
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
