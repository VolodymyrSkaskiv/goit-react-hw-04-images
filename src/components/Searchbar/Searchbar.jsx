import { Component } from 'react';
import { toast } from 'react-hot-toast'; // для показу повідомлень
import { BiSearch } from 'react-icons/bi'; // іконка пошуку
import css from './Searchbar.module.css'; // стилізація
import PropTypes from 'prop-types';

// Компонент пошуку
export class Searchbar extends Component {
  state = {
    search: '',
  };

  onChangeInput = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value }); // зміна стану по ключу name
  };

  resetForm = () => {
    this.setState({ search: '' });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form
          onSubmit={evt => {
            evt.preventDefault();

            if (this.state.search.trim() === '') {
              return toast.error('Enter text for search.'); //пустий запит, і пробіли
            }

            // виклик функції з App.jsx для відправки запиту
            this.props.handleSubmit(this.state.search);
            this.resetForm();
          }}
          className={css.Form}
        >
          <button type="submit" className={css.Button}>
            <BiSearch size="20" />
          </button>

          <input
            value={this.state.search}
            onChange={this.onChangeInput}
            className={css.Input}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
