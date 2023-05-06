import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'; // елемент галереї
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images, togleModal }) => {
  return (
    <>
      <ul className={css.gallery}>
        <ImageGalleryItem togleModal={togleModal} images={images} />
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired, // масив об'єктів
  togleModal: PropTypes.func.isRequired,
};
