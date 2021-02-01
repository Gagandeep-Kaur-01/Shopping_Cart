import React from 'react';
import Product from '../Products';
import data from '../../data';
import Rating from '../Rating'

export default function ProductScreen(props) {
    const product = data.products.find(x => x._id === props.match.params.id);
    // props.match.params.id ==> this value is the value which user enter in the route or user select the product

    // if product doesn't exists
    if(!product) {
        return 
          <div>
            Product not found :)
          </div>
    } 
    // if product exists
    return(
        <div>
           <div className="row">
               <div className="col-2">
                   <img className="large" src={product.image} alt={product.name}></img>
               </div>
               <div className="col-1">
                   <ul>
                       <li>
                           <h1>{product.name}</h1>
                       </li>
                       <li>
                          <Rating
                            rating={product.rating}
                            numReviews={product.numReviews}
                           ></Rating>
                         </li>
                   </ul>

               </div>
               <div className="col-1">

               </div>
           </div>
        </div>
    )
}