import { BiSearch } from 'react-icons/bi'; // іконка пошуку
import css from './Searchbar.module.css'; // стилізація
import PropTypes from 'prop-types';

// Компонент пошуку
const Searchbar = ({ onSubmit, onChange, inputValue }) => {
  return (
    <header className={css.searchbar}>
      <form onSubmit={onSubmit} className={css.Form}>
        <button type="submit" className={css.Button}>
          <BiSearch size="20" />
        </button>

        <input
          className={css.Input}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onChange}
          value={inputValue}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  shetch: PropTypes.string,
};

export default Searchbar;
