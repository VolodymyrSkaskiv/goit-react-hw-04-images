import css from './Button.module.css';
import PropTypes from 'prop-types';
// Функціональний компонент, який відповідає за кнопку "Load more".
const Button = ({ onClick }) => {
  return (
    <button onClick={() => onClick()} className={css.Button} type="button">
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
