import React from "react";
import propTypes from "prop-types";
import Styles from './Button.module.css'

const Button = ({ onFetchImages }) => (
  <button className={Styles.Button} type="button" onClick={(onFetchImages)}>
    Load more
  </button>
);

Button.propTypes={
  onFetchImages: propTypes.func.isRequired
}

export default Button;
