import React from 'react';
import './App.css';
import Course from './components/Course/Course';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Course></Course>
     <Footer></Footer>
    
    </div>
  );
}

export default App;
