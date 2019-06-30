import React, {useState, useEffect} from 'react';
import { PropTypes } from 'prop-types';

import ImageViewer from 'AppComponents/ImageViewer';
import SlideButton from 'AppComponents/SlideButton';
import Pagination from 'AppComponents/Pagination';
import ImageDescription from 'AppComponents/ImageDescription';
import {getImages} from 'AppServices/imageService';
import './index.scss';

function Slider({imagesNumber, height, width, pagination, controls, description, autoplayMode}) {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  let autoplay;

  useEffect(() => {
    getImages(imagesNumber).then((images) => {
      setImages(images);
    })
  }, []);

  useEffect(() => {
    if(autoplayMode){ 
      clearTimeout(autoplay);
      autoplay = setTimeout(() => {
        goNext()
      }, 5000)
    }
  }, [currentImageIndex]);

  useEffect(() => {
    if(autoplayMode){ 
      return () => {
        clearTimeout(autoplay);
      }
    }
  }, [currentImageIndex]);

  const goNext = () => {
    setCurrentImageIndex(((currentImageIndex+1)%imagesNumber));
  }

  const goPrev = () => {
    setCurrentImageIndex((currentImageIndex-1+imagesNumber)%imagesNumber);
  }

  const goToSlide = (imageIndex) => {
    setCurrentImageIndex(imageIndex);
  }

  return (
    <div className="slider" style={{height, width}}>
      {images.length && images[currentImageIndex].urls && images[currentImageIndex].urls.regular ? (
        <ImageViewer url={images[currentImageIndex].urls.regular} description={images[currentImageIndex].description} />)
        : <div className="loader" />
      }
      {pagination && (images.length > 1) && <Pagination imagesNumber={imagesNumber} active={currentImageIndex} changeSlide={goToSlide} />}
      {description && images[currentImageIndex] && images[currentImageIndex].description && <ImageDescription description={images[currentImageIndex].description} />}
      {controls && (images.length > 1) && <SlideButton clickHandler={goNext} next/>}
      {controls && (images.length > 1) && <SlideButton clickHandler={goPrev} prev/>}
    </div>
  );
}

Slider.propTypes = {
  imagesNumber: PropTypes.number,
  height: PropTypes.string,
  width: PropTypes.string,
  pagination: PropTypes.bool,
  controls: PropTypes.bool,
  description: PropTypes.bool,
  autoplayMode:  PropTypes.bool,
};

Slider.defaultProps = {
  imagesNumber: 0,
  height: '',
  width: '100%',
  pagination: false,
  controls: false,
  description: false,
  autoplayMode: false,
};

export default Slider;
