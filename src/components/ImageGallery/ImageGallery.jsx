import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'; // елемент галереї
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, onOpenModal }) => (
  <ul className={css.gallery}>
    {images.map(({ id, tags, webformatURL, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        tags={tags}
        largeImageURL={largeImageURL}
        onOpenModal={onOpenModal}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired, // масив об'єктів
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGallery;
