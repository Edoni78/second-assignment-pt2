import React from 'react'
import '../CSS/Cards.css'

const Cards = (props) => {
  return (
    <div className='card'>
        <div className='card-header'> <h3>{props.header}</h3></div>

        <div className='card-container'>
            <p className='card-price'>{props.price}</p>
            <p className='card-sale'>{props.sale}</p>
        </div>

        <div className='card-button'>
            <button className='btn'>{props.btn}</button>
        </div>
      
    </div>
  )
}

export default Cards
