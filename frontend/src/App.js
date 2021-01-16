import React, { Fragment } from 'react';
import { BrowserRouter, Route , Link } from 'react-router-dom'
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SigninScreen from './screens/SigninScreen';

import Navbar from './Navbar';

function App() {
  return (
<div>
  <div>
    <BrowserRouter>
      <Fragment>
    <div className="grid-container">
    <header className="header">
          <Navbar /> 
          <Link to="/" ><button className="gents-house"> <h2><b>Gents House</b></h2> </button></Link>
            {/* <Link to="/">Gents House</Link> */}
            
        <div className="header-links">
           <a href="cart.html">Cart</a>
            <Link to="/signin"></Link>
            <a href="signin">Sign In</a>
        </div>
       

    </header>
    {/* <aside className="sidebar">
        <h2>Shopping categories</h2>
       
        <ul>
            <li>
                 <a href="index.html"><h3>Throusers</h3></a>
            </li>
            <li>
                <a href="index.html"><h3>Shirts</h3></a>
            </li>
        </ul>
    </aside> */}
    <main className="main">
        <div className="content">
          <Route path="/signin" component={SigninScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/" exact={true} component={HomeScreen} />
          
        </div>
  
    </main>
    
</div>
</Fragment>
      
</BrowserRouter> 
  </div>
  {<footer className="footer"> All right reserved</footer> }
</div>




       

  );
}

export default App;
