
import React, { Component } from 'react';
import '../css/imageSlider.css';
import wrapImage from './wrappedImageSlider';


const image = [
    {
        index: 1,
        path: "https://m.media-amazon.com/images/I/81nzdOZ-pDL._SX3000_.jpg",
    },
    {
        index: 2,
        path: "https://m.media-amazon.com/images/I/71B2qh+9MeL._SX3000_.jpg",    
    },
    {
        index: 3,
        path: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71gbdEe+82L._SX3000_.jpg",
    },
    {
        index: 4,
        path: "https://m.media-amazon.com/images/I/81O9D-SxcAL._SX3000_.jpg",
    }
   
]

 class ImageSlider extends Component {
 
    render() {
        const {srcc,name} = this.props;
        return (
            <div className='imgae-slider'>
                {/* <h1>{this.props.name}</h1> */}
                <img src={srcc} className='img'  alt={name}/>
            </div>
        )
    }
}

export default wrapImage(ImageSlider,image);

/*
https://m.media-amazon.com/images/I/81nzdOZ-pDL._SX3000_.jpg
*/ 