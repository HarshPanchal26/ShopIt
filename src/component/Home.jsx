import React from 'react'
import ImageSlider from './ImageSlider'
import { Product } from './Product'

  function Home() {
    return (
        <React.Fragment>
            {console.log("Home is rendered")}
            <ImageSlider></ImageSlider>
            <Product></Product>
        </React.Fragment>
    )
}
export default Home;