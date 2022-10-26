import React from 'react'
import './ProductCard.css'



function ProductCard( 
    {
        id,
        newPrice,
        oldPrice,
        productImage,
        productName
    }
  )
{
  return (
    <div className='card-container'>
        <div className='card-image'>
              <img src={productImage}/>
        </div>
            
        <div className='card-name'>
            <p className='product-Name'>{productName}</p>
            <p className='product-oldPrice'>{oldPrice}</p>
            <p className='product-newPrice'>{newPrice}</p>
        </div>
      

        <div className='button-contianer'>
            <button className='button-style'>
                <h3>ADD TO CART</h3>
            </button>
        </div>
    </div>

  )
}

export default ProductCard