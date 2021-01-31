import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Product from "./components/Products"

function App() {
  return (
    <BrowserRouter>
    <Route path="/product/:id" component={ProductScreen}></Route>
    <Route path="/" component={HomeScreen} exact></Route>
    <div> 
      <Product />
    </div>
    </BrowserRouter>
  );
}

export default App;
