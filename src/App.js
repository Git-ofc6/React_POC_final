import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Header from './Components/header';
import Body from './Components/Body';
import Footer from './Components/footer';


function App() {
  return (
    <div className="App container">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
