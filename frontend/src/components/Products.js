import React from 'react';
import data from '../data'
import './Products.css'

function Product() {

  return(

      <div className="grid-container">

          <header className="row">
            <div>
              <a className="brand" href="index.html">Shopping Site</a>
            </div>
            <div>
              <a href="cart.html">Cart</a>
              <a href="signin.html">Sign In</a>
            </div>
          </header>

          <main>
            <div>
              <div className="row center">

                {data.products.map((product) => (

                    <div key={product._id} className="card">
                      <a href={`/product/${product._id}`}>
                        <img className="medium" src="./images/cc-1.jpg" alt="product" />
                      </a>
                      <div className="card-body">
                        <a href="product.html">
                          <h2>{product.name}</h2>
                        </a>
                        <div className="rating">
                          <span> <i className="fa fa-star"></i> </span>
                          <span> <i className="fa fa-star"></i> </span>
                          <span> <i className="fa fa-star"></i> </span>
                          <span> <i className="fa fa-star"></i> </span>
                          <span> <i className="fa fa-star"></i> </span>
                        </div>
                        <div className="price">$120</div>
                      </div>
                    </div> 
                    
                  ))}
               
              </div>
            </div>
          </main>

          <footer className="row center">All right reserved</footer>

      </div>

  )    
};

export default Product;