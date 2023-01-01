// @flow
import * as React from 'react';
import '../css/cloth.css';


export class Cloths extends React.Component{
  render() {
    return (
      <div className='cloth-box'>
         <div className='cloths-item' id="ci-1">
            <img src="https://cdnblog.picsart.com/2022/03/Midpost_01.png"></img>
         </div>
         <div className='cloths-item' id="ci-2">
            <div className='bunch-image'>
                <div className='bunch-1'>
                    <img src="https://www.cleanipedia.com/images/j460tsxlxjkc/1d605c295dbd7c92f226a9d522d08e4f/52909e59944e62bc575015c248037916/aHR0cHNfX193d3cuY2xlYW5pcGVkaWEuY29tX2NvbnRlbnRfZGFtX3VuaWxldmVyX2NsZWFuaXBlZGlhX2dsb2JhbF9rZXlfdmlzdWFsX2xhdW5kcnlfb25fYV9idWRnZXQtMTU1MzUxOC1qcGcuanBn/990w-660h/different-coloured-clothes-hanging-on-clothes-rack-with-yellow-background.jpg" alt='image'></img>
                </div>
                <div className='bunch-1'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5lMS0-FbEMUhAPtfIum-AuTrk4aHOfvQlnQ&usqp=CAU" alt='dc'></img>
                </div>
                <div className='bunch-1'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOqJUTCk0xVHWLsQN3kh8lpMl5yGj-ciXM6iDBP-VQkr0saQtbWWqdyjzA801_r6PLGbI&usqp=CAU'></img>
                </div>
                <div className='bunch-1' id='b4'>
                    <img src="https://thumbs.dreamstime.com/z/smooth-elegant-white-cloth-isolated-white-background-transparent-separated-texture-flying-fabric-very-high-resolution-image-97451217.jpg"></img>
                </div>
                <div className='bunch-1'>
                    <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.peakpx.com%2Fen%2Fhd-wallpaper-desktop-nnrme&psig=AOvVaw2DOdI1pEIYbhGZXGOoDlkM&ust=1669983487219000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMjsoIiy2PsCFQAAAAAdAAAAABAk'/>
                </div>
                <div className='bunch-1'>
                    <img src='https://cdn.shopify.com/s/files/1/0314/3765/2012/products/f22_104-596_button-front-shirt_maroon_001_800x.jpg?v=1668819725'/>
                </div>
            </div>
         </div>
         <div className='cloths-item' id="ci-3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRP0gTQn3vyxC3O7ggqT9WKKuIbwaSat3IA&usqp=CAU"></img>
         </div>
      </div>
    );
  };
};