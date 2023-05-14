import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi'; // іконка пошуку
import css from './Searchbar.module.css'; // стилізація
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

// Компонент пошуку
const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState(''); //стейт для зберігання query
  const handleChange = evt => {
    setSearch(evt.currentTarget.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (search.trim() === '') {
      return toast.error('Value cannot be an empty string');
    }
    onSubmit(search);
    setSearch('');
  };

  return (
    <header className={css.searchbar}>
      <form onSubmit={handleSubmit} className={css.Form}>
        <button type="submit" className={css.Button}>
          <BiSearch size="20" />
        </button>

        <input
          className={css.Input}
          onChange={handleChange}
          value={search}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
