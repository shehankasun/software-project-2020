import React from 'react';
import { BrowserRouter, Route , Link } from 'react-router-dom'
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from './Navbar';

function App() {
  return (
<div>
  <div>
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
          <Navbar /> 
          <Link to="/" ><button className="gents-house"> <h2><b>Gents House</b></h2> </button></Link>
            {/* <Link to="/">Gents House</Link> */}
            
        <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
        </div>
       

    </header>

    <main className="main">
        <div className="content">
          <Route path="/product/:id" component={ProductScreen}/>
          <Route path="/" exact={true} component={HomeScreen}/>      
        </div>
  
    </main>
    <footer className="footer"> All right reserved</footer>
</div>
</BrowserRouter> 
  </div>
</div>        
  );
}

export default App;
