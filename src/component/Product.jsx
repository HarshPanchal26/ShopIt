// @flow
import * as React from 'react';

import '../css/product.css';
import { Cloths } from './Cloths';
import  Advertisment from './Advertisment';
import Movie from './Movie';
import Footer from './Footer';

export class Product extends React.Component{
  render() {
    return (
      <div  className='product'>
         <Cloths></Cloths>
         <div className='aad-bar'>
           <Movie></Movie>
           <Advertisment></Advertisment>
         </div>
          <Cloths></Cloths>   
          <Footer></Footer>
      </div>
    );
  };
};