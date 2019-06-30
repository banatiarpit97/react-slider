import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './index.module.scss';

function Pagination({imagesNumber, active, changeSlide}) {
    const paginationArray = [];
    for(let i=0;i<imagesNumber;i++){
        paginationArray.push(i);
    }

    return (
        <div className={styles.pagination}>
            { paginationArray.map(val => <span key={val} className={`${styles.bullet} ${(val===active) && styles.active}`} onClick={() => changeSlide(val)} />)}
        </div>
    );
}

Pagination.propTypes = {
    imagesNumber: PropTypes.number,
    active: PropTypes.number,
    changeSlide: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
    imagesNumber: 0,
    active: 0,
};

export default Pagination;
