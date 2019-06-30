import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Slider from 'AppContainers/Slider';
import { imagesNumber, sliderHeight, sliderWidth } from 'AppConstants';

ReactDOM.render((<Slider 
                    imagesNumber={imagesNumber} 
                    height={sliderHeight} 
                    width={sliderWidth}
                    pagination
                    controls
                    description
                    autoplayMode
                />), document.getElementById('root'));
