import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {

    // const [itemCount, setItemCount] = useState(0)  if we are using this, then itemCount is created for every item which is not correct

    const {cartItems, addToCart, removeFromCart, url,currency} = useContext(StoreContext)

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img src={url + "/images/" + image} alt="" className="food-item-image" />
            {
                !cartItems[id] 
                ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                : <div className="food-item-counter">
                    <img className='btn' onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img className='btn' onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-description"> {description} </p>
            <p className="food-item-price"> {currency}{price} </p>
        </div>
    </div>
  )
}

export default FoodItem