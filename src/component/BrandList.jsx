import React from 'react'
import '../css/brandList.css';

export default function BrandList(props) {
    return (
        <div className='brand-list'>
            
            {props.list.map((x)=>{
            return <div className='brand'>
                <img src={x.url} alt={x.id} id="brand-img" />
            </div>
            })}
            
        </div>
    )
}
