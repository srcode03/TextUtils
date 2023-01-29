import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, {useState} from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {
  const[mode,setmode]=useState('light');
  const[alert,setalert]=useState(null);
  const toggleblack=()=>{
    if(mode==='light' || mode==='green')
    {
      setmode('dark');
      document.body.style.backgroundColor='#454545';
      showalert("Dark Mode enabled","success");
      document.title="TextUtilis-Dark mode"
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='#E1D9D1';
      showalert("Light Mode enabled","success");
      document.title="TextUtilis-Light mode";
    }
  }
  const togglegreen=()=>{
    if(mode==='light' || mode==='black')
    {
      setmode('sucess');
      document.body.style.backgroundColor='green';
      showalert("Green Mode enabled","success");
      document.title="TextUtilis-Green Mode";
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='#E1D9D1';
      showalert("Light Mode enabled","success");
      document.title="TextUtilis-Light mode"
    }
  }
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  
  
  return (
    <>
    < BrowserRouter>
    <Navbar title="React" mode={mode} toggleblack={toggleblack} togglegreen={togglegreen} />
    <Alert alert={alert} mode={mode}/>
    <div className="container">
      <Routes>
        {/* <Route exact path="/about">
          <About/>
        </Route> */}
       <Route exact path="/about" element={<About mode={mode}/>} />
       <Route exact path="/" element={<TextForm mode={mode} heading={"Enter the text to be analysed"} />} />
      </Routes> 
             </div>
     </ BrowserRouter>
      
      
   
    
    
    </>
  );
}

export default App;
