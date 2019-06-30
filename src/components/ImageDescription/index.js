import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './index.module.scss';

function ImageDescription({description}) {
  return (
    <div className={styles.description}>
      <p>{description}</p>
    </div>
  );
}

ImageDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

ImageDescription.defaultProps = {
};

export default ImageDescription;
