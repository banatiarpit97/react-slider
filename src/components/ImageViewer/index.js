import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './index.module.scss';

function ImageViewer({url , description}) {
  return (
    <img src={url} alt={description} className={styles.image} />
  );
}

ImageViewer.propTypes = {
  url: PropTypes.string,
  description: PropTypes.string,
};

ImageViewer.defaultProps = {
  url: '',
  description: 'Slider Image',
};

export default ImageViewer;
