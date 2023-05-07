import { useState, useEffect } from 'react';
import fetchImages from '../api/api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from 'components/Button/Button';
import Modal from './Modal/Modal';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [search, setSearch] = useState('');
  const [images, setImages] = useState('');
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState({ showModal: false, largeImageURL: '' });
  const [foundResult, setFoundResult] = useState(false);
  const [lastPage, setLastPage] = useState(0);

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (inputValue === '') {
      alert('Please enter your query');
      return;
    }
    if (search === inputValue) return;
    setImages([]);
    setSearch(inputValue);
    setPage(1);
  };

  const clickLoad = () => {
    setPage(prevState => prevState + 1);
  };

  const toggleModal = () => {
    setModal(prevState => ({ ...prevState, showModal: !prevState.showModal }));
  };

  const openModal = largeImageURL => {
    setModal(prevState => ({ ...prevState, largeImageURL }));
    toggleModal();
  };

  useEffect(() => {
    if (page === 0) return;

    const fetchImagesByQuery = async searchQuery => {
      setLoading(true); // показуємо лоадер
      setError(null); // очищаємо помилку
      setFoundResult(false); // очищаємо сповіщення про відсутність результатів

      try {
        const response = await fetchImages(searchQuery, page);
        setImages(prevState => [...prevState, ...response.hits]);
        setLastPage(Math.ceil(response.totalHits / 12));
        response.totalHits === 0 && setFoundResult(true); // якщо результатів немає, то відображаємо сповіщення
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false); // прибираємо лоадер
      }
    };

    fetchImagesByQuery(search);
  }, [page, search]);

  return (
    <div>
      {/*текстове поле для введення запиту */}
      <Searchbar handleSubmit={this.handleSubmit} />

      {/* Перевіряємо, чи є помилка */}
      {error && (
        <h2 style={{ textAlign: 'center' }}>
          Something went wrong: ({error})!
        </h2>
      )}

      {/* відображення списку зображень */}
      <ImageGallery togleModal={this.openModal} images={images} />

      {/* Перевіряємо, чи відбувається завантаження */}
      {loading && <Loader />}

      {/* Перевіряємо, чи є результати пошуку порожніми */}
      {this.state.empty && (
        <h2 style={{ textAlign: 'center' }}>
          Sorry. There are no images ... 😭
        </h2>
      )}

      {/* Перевіряємо, чи потрібно відображати кнопку "Load more" */}
      {total / 12 > page && <Button clickLoad={this.clickLoad} />}

      {/* Перевіряємо, чи потрібно відображати модальне вікно */}
      {modal.showModal && (
        <Modal onClose={toggleModal}>
          largeImageURL = {modal.largeImageURL} />
        </Modal>
      )}
    </div>
  );
};

export default App;
