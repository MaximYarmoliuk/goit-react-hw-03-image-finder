import React, { Component } from "react";
import propTypes from "prop-types";
import styles from "./Modal.module.css";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keyup", this.closeImageByClickEsc);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.closeImageByClickEsc);
  }

  closeImageByClickEsc = e => {
    e.keyCode === 27 && this.props.onCloseLargeImage();
  };

  closeImageByClickOnOverloy = e => {
    e.target === e.currentTarget && this.props.onCloseLargeImage();
  };

  render() {
    const { url } = this.props;
    return (
      <div className={styles.Overlay} onClick={this.closeImageByClickOnOverloy}>
        <div className={styles.Modal}>
          <img src={url} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  url: propTypes.string.isRequired,
  onCloseLargeImage: propTypes.func.isRequired
};
