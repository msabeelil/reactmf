import React, { useState, useEffect} from 'react';
import './ShopItem.css'
function ShopItem({cartItemCount=0, onAddingItem}) {
  const [itemCount, setItemCount] = useState(cartItemCount);
  useEffect(()=>{
    
    const globalEventEmitter = window.globalEventEmitter;
    if (globalEventEmitter) {
      const subscription = globalEventEmitter.events$.subscribe((event) => {
        if (event === "reduceItemCount") {
          handleCartUpdate(itemCount-1);
        }
      });

      return () => {
        subscription.unsubscribe();
      };
    }

  },[itemCount]);
  const handleCartUpdate = (newCount) => {
    setItemCount(newCount);
    if(onAddingItem)
    {
      onAddingItem(newCount);
    }
  };
  return (
    <div className='shop-item-container'>
        <div className='shop-item-description'> 
            <p className='shop-item-name'>Adidas shoes </p>
            {itemCount > 0 && <span className='shop-item-count'>{`Quantity ${itemCount}`}</span>}
            <img className='shop-item-image' src='https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/e/o/d/-original-imaggcb5cybyryeh.jpeg?q=20&crop=false'/>
            <span className='shop-item-price'>Price : $ 8.45</span>
        </div>
        <button className='add-tocart-btn' onClick={()=>handleCartUpdate(itemCount+1)}>Add to Cart</button>
    </div>
  )
}

export default ShopItem