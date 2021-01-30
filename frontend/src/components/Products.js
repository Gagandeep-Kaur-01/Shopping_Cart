import React from 'react';
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
                <div className="card">
                    <a href="product.html">
                      <img className="medium" src="./images/cc-1.jpg" alt="product" />
                    </a>
                    <div className="card-body">
                    <a href="product.html">
                      <h2>Cousin Covers</h2>
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
             </div>
            </div>
          </main>

          <footer className="row center">All right reserved</footer>

      </div>

  )    
};

export default Product;