import React from 'react'
import '../css/offer.css';
import $ from "jquery";
import { useEffect } from 'react';
import SignIn from './SignIn';

export default function Offers() {
    const showOffer = ()=>{
        $(".cuppon").toggle();
    }

    return (
    <div className='offers-for-day'>
        <div className='title-offer' onClick={showOffer}>
           Offer for the day
        </div>
        <div className='cuppon' >
           <img src='https://www.shutterstock.com/image-vector/diwali-festival-sale-design-template-260nw-1499763596.jpg' alt='offer' id="offer"></img>
        </div>
    </div>
  )
}     




// SignIn.JSX

  // const data = getDocs(collectionRef);
                // console.log(data);
                // let newArry = data.docs.map((x) => {
                //     return console.log({ ...x.data(), id: x.data });
                // })
                // setArray(newArry);

            
                // const newData = []; 

