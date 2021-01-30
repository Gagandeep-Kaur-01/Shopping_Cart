import React from 'react';
import './Products.css'

function Product() {
    return(

        <div class="grid-container">
            <header class="row">
             <div>
               <a class="brand" href="index.html">Shopping Site</a>
              </div>
              <div>
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign In</a>
              </div>
             </header>
          <main>

            <div>
              <div class="row center">

                <div class="card">
                    <a href="product.html">
                      <img class="medium" src="./images/p1.jpg" alt="product" />
                    </a>
                    <div class="card-body">
                    <a href="product.html">
                      <h2>Nike Slim Shirts</h2>
                    </a>
                    <div class="rating">
                      <span> <i class="fa fa-star"></i> </span>
                      <span> <i class="fa fa-star"></i> </span>
                      <span> <i class="fa fa-star"></i> </span>
                      <span> <i class="fa fa-star"></i> </span>
                      <span> <i class="fa fa-star"></i> </span>
                    </div>
                    <div class="price">$120</div>
                  </div>
                </div>

                <div class="card">
                  <a href="product.html">         
                    <img class="medium" src="./images/p1.jpg" alt="product" />
                  </a>
                  <div class="card-body">
                    <a href="product.html">
                      <h2>Nike Slim Shirts</h2>
                    </a>
                    <div class="rating">
                      <span> <i class="fa fa-star"></i> </span>
                      <span> <i class="fa fa-star"></i> </span>
                      <span> <i class="fa fa-star"></i> </span>
                      <span> <i class="fa fa-star"></i> </span>
                      <span> <i class="fa fa-star"></i> </span>
                    </div>
                    <div class="price">$120</div>
                  </div>
                </div>

                <div class="card">
                  <a href="product.html">         
                    <img class="medium" src="./images/p1.jpg" alt="product" />
                  </a>
                  <div class="card-body">
                    <a href="product.html">
                      <h2>Nike Slim Shirts</h2>
                    </a>
                    <div class="rating">
                      <span> <i class="fa fa-star"></i> </span>
                      <span> <i class="fa fa-star"></i> </span>
                      <span> <i class="fa fa-star"></i> </span>
                      <span> <i class="fa fa-star"></i> </span>
                      <span> <i class="fa fa-star"></i> </span>
                    </div>
                    <div class="price">$120</div>
                  </div>
                </div>

                <div class="card">
                  <a href="product.html">         
                    <img class="medium" src="./images/p1.jpg" alt="product" />
                  </a>
                  <div class="card-body">
                    <a href="product.html">
                      <h2>Nike Slim Shirts</h2>
                    </a>
                    <div class="rating">
                      <span> <i class="fa fa-star"></i> </span>
                      <span> <i class="fa fa-star"></i> </span>
                      <span> <i class="fa fa-star"></i> </span>
                      <span> <i class="fa fa-star"></i> </span>
                      <span> <i class="fa fa-star"></i> </span>
                    </div>
                    <div class="price">$120</div>
                  </div>
                </div>

                <div class="card">
                    <a href="product.html">         
                      <img class="medium" src="./images/p1.jpg" alt="product" />
                    </a>
                    <div class="card-body">
                      <a href="product.html">
                        <h2>Nike Slim Shirts</h2>
                      </a>
                      <div class="rating">
                        <span> <i class="fa fa-star"></i> </span>
                        <span> <i class="fa fa-star"></i> </span>
                        <span> <i class="fa fa-star"></i> </span>
                        <span> <i class="fa fa-star"></i> </span>
                        <span> <i class="fa fa-star"></i> </span>
                      </div>
                      <div class="price">$120</div>
                    </div>
                </div>

                <div class="card">
                    <a href="product.html">
                      <img class="medium" src="./images/p1.jpg" alt="product" />
                    </a>
                    <div class="card-body">
                      <a href="product.html">
                        <h2>Nike Slim Shirts</h2>
                      </a>
                     <div class="rating">
                       <span> <i class="fa fa-star"></i> </span>
                       <span> <i class="fa fa-star"></i> </span>
                       <span> <i class="fa fa-star"></i> </span>
                       <span> <i class="fa fa-star"></i> </span>
                       <span> <i class="fa fa-star-half-o"></i> </span>
                      </div>
                      <div class="price">$120</div>
                    </div>
                </div>
             </div>
            </div>

        </main>
        <footer class="row center">All right reserved</footer>
    </div>

    )    
}

export default Product;