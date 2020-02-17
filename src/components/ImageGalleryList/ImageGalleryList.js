import React from "react";
import propTypes from "prop-types";
import styles from './ImageGalleryItem.module.css'

const ImageGalleryList = ({ url, largeImageUrl, onOpenImage }) => (
  <li className={styles.ImageGalleryItem} >
    <img src={url} alt={largeImageUrl} className={styles.ImageGalleryItemImage} onClick={onOpenImage}/>
  </li>
);

ImageGalleryList.propTypes = {
  url: propTypes.string.isRequired,
  largeImageUrl: propTypes.string.isRequired,
  onOpenImage: propTypes.func.isRequired
}

export default ImageGalleryList;
