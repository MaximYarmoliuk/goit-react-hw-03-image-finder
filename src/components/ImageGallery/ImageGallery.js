import React from "react";
import ImageGalleryList from "../ImageGalleryList/ImageGalleryList";
import propTypes from "prop-types";
import styles from "./ImageGallery.module.css"

const ImageGallery = ({ images, openImage }) => (
  <ul className={styles.ImageGallery}>
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryList key={id} url={webformatURL} largeImageUrl={largeImageURL} onOpenImage={openImage}/>
    ))}
  </ul>
);

ImageGallery.propTypes ={
  images: propTypes.arrayOf(propTypes.object.isRequired),
  openImage: propTypes.func.isRequired,
}

export default ImageGallery;
