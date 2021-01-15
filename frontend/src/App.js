import React from 'react';
import { BrowserRouter, Route , Link } from 'react-router-dom'
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {

  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (


<div>
  <div>
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
        <div className="brand">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <Link to="/">Gents House</Link>
            
        </div>
        <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
        </div>

    </header>
    <aside className="sidebar">
        <h3>Shopping categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul className= "slidebar-bullet">
            <li>
            <button className="button-slidebar"><b><a  href="index.html">Slim-fit</a></b></button>
            <button className="button-slidebar"><b><a  href="index.html">Classic</a></b></button>
            <button className="button-slidebar"><b><a  href="index.html">Casual</a></b></button>
            <button className="button-slidebar"><b><a  href="index.html">Traditional</a></b></button>
            </li>
        </ul>
    </aside>
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
