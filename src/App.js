import React from 'react';
import './App.css';
import './hader/index';
import Dolar from './hader/index';
import Footer from './footer/index';
import Logo from './logo.png';


function App() {
  return (
    <div className="App">
         <Dolar titel="bonjour"/>
    <div className="MO3EZ">
 
    <img src ={Logo} alt="Smiley face" className="image"/>
     <h1>hello app</h1>
     </div>
     <Footer titel="footer"/>
    </div>
  );
}

export default App;
