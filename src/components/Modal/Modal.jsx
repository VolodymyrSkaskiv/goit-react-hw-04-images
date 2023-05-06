import { Component } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

// Пошук модалки щоб динамічно додати до DOM-дерева сторінки
// const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  // реєструє обробник події keydown на вікні браузера

  componentDidMount() {
    window.addEventListener('keydown', this.keyDown); // при натисканні клавіші Escape викликає функцію keyDown
  }

  keyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.closeModal();
    }
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown); // видаляє обробник події keydown з вікна браузера
  }

  // закриття модалки по кліку на бекдроп
  handleClose = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div onClick={this.handleClose} className={css.Overlay}>
        <div className={css.Modal}>{this.props.children}</div>
        {/* рендеринг дочірніх елементів */}
      </div>
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func,
  children: PropTypes.node.isRequired,
  largeImageURL: PropTypes.string,
  alt: PropTypes.string,
};
