import React, { useState } from 'react';
import data from '../data'
import './Products.css'
import Rating from './Rating';

function Product() {
  const [products, setProducts] = useState([]);

  return (
          <div>
            <div className="row center">

              {data.products.map((product) => (

                <div key={product._id} className="card">
                  <a href={`/product/${product._id}`}>
                    <img className="medium" src={product.image} alt={product.name} />
                  </a>
                  <div className="card-body">
                    <a href={`/product/${product._id}`}>
                      <h2>{product.name}</h2>
                    </a>

                    <Rating
                      rating={product.rating} 
                      numReviews={product.numReviews}
                    ></Rating> 
                        
                    <div className="price">${product.price}</div>
                  </div>
                </div> 
                    
              ))}
               
            </div>
            </div>
          
  )    
};

export default Product;