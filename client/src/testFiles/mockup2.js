import React, { Component } from 'react';
import logo from './MYtineraryLogo.png';
import arrow from './arrow.png';
import house from './homeIcon.png';
import proFo from './profileLogo.png';
import  './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
<img src={proFo} className="proFoLogo" alt ="account options"/>

          <img src={logo} className="App-logo" alt="logo" />
          </header>
          <p>
             your perfect trip, designed by insiders who know and love their cities.
          </p>
          <h2>Start browsing</h2>
          <div className='arrowDiv'>
<a href="http://tinyurl.com/y4bfkha4" target="blank" rel="noopener noreferrer">
          <img src={arrow} className="arrow-logo" alt="Click here to start browsing"/>
          </a>
          
          </div>
          <p>Whant to build your own MYtinerary?</p>
          <div className='linkDiv'>
          <a
            className="App-link"
            href="http://tinyurl.com/y4bfkha4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Log in
          </a>
          <a
            className="App-link"
            href="http://tinyurl.com/y4bfkha4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Create Account
          </a>
          </div>
          <footer>
         
          <a href="http://tinyurl.com/y4bfkha4"  target="_blank" rel="noopener noreferrer">
          <div className='homeIconDiv'>
<img src={house} alt="Home page"  className="homeIcon"></img>
</div>
</a>

</footer>
        
      </div>
    );
  }
}

export default App;
