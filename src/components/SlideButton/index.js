import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './index.module.scss';

function SlideButton({next, prev, clickHandler}) {
  return (
    <div className={`${styles.sliderButton} ${next && styles.next} ${prev && styles.prev}`} onClick={clickHandler}>
      {next && <i className="fas fa-chevron-right"></i>}
      {prev && <i className="fas fa-chevron-left"></i>}
    </div>
  );
}

SlideButton.propTypes = {
  next: PropTypes.bool,
  prev: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

SlideButton.defaultProps = {
  next: false,
  prev: false,
};

export default SlideButton;
