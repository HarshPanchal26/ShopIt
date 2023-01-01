// @flow
import * as React from 'react';
import wrapImage from'./wrappedImageSlider';
// import Advertisment from './Advertisment';

const advertisment1 = [
  {
      index: 1,
      path: "https://m.media-amazon.com/images/I/61v9IAgD-YL._SX3000_.jpg",
  },
  {
      index: 2,
      path: "https://m.media-amazon.com/images/I/613-gA49v1L._SX3000_.jpg",
  },
  {
      index: 3,
      path: "https://rukminim1.flixcart.com/fk-p-flap/844/140/image/8b853dc3ee0c54b0.jpg?q=50",
  },
  {
      index: 4,
      path : "https://m.media-amazon.com/images/I/51W-9Vu1e9L._SX3000_.jpg",
  },
  
]

class Advertisment extends React.Component{
  
  render() {
    const {name,srcc} = this.props;
    return (
      <div className='adevertisment'> 
         {/* Advertismnetdsv */}
         <div className='adv-box'>
              <img src={srcc} className='img-adv' aly={name}/>
         </div>
      </div>
     
    );
  };
};
export default wrapImage(Advertisment,advertisment1);



