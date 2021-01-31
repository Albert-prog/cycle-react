import React from 'react';
import './src/App.css';
import Img from './src/4_product.jpg';


function App() {
  return (
    <div className="App">
     <main className="mainDiv">
      <img src={Img} alt="product" class="HeroImg"></img>
      <div className="titleDiv">
        <h1>CYCLE is coming straight to your mail box</h1>
        <h3>The World's first cleaner recycle inside-out</h3>
      </div>
     </main>
     <section>
       <a href="sign-up.html">Refer a friend</a>
        <div data-vl-widget="embedForm"></div>
     </section>
    </div>
  );
}

export default App;
