import { useState, useEffect } from 'react';
import { getImages } from 'api/api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from 'components/Button/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Modal from './Modal/Modal';
import '../index.css';
const App = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState('');
  const [tags, setTags] = useState('');
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (search !== '') {
      fetchImages(search, page);
    }
  }, [page, search]); //не пустий рядок пошуку

  const fetchImages = async (search, page) => {
    try {
      setLoading(true);
      const data = await getImages(search, page);
      if (data.hits.length === 0) {
        return toast.error(
          "We didn't find anything for this search :(  Try another option"
        );
      }

      setTotal(data.totalHits);
      setImages(prev => [...prev, ...data.hits]);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = search => {
    setSearch(search);
    setPage(1);
    setImages([]);
  };

  const onLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const onOpenModal = (largeImage, tags) => {
    setShowModal(true);
    setLargeImage(largeImage);
    setTags(tags);
  };

  const onCloseModal = () => {
    setShowModal(false);
    setLargeImage('');
    setTags('');
  };

  const totalPage = total / images.length;
  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      {images.length === 0 && (
        <p>Enter a query on the topic you are interested in</p>
      )}
      {loading && <Loader />}
      {images.length !== 0 && (
        <ImageGallery images={images} onOpenModal={onOpenModal} />
      )}
      {totalPage > 1 && !loading && images.length !== 0 && (
        <Button onClick={onLoadMore} />
      )}
      {showModal && (
        <Modal
          largeImage={largeImage}
          tags={tags}
          onCloseModal={onCloseModal}
        />
      )}
      {error && (
        <h2>
          We didn't find anything for this search :(
          <span>Try another option</span>
        </h2>
      )}
      <ToastContainer autoClose={2000} theme="dark" />
    </div>
  );
};

export default App;
