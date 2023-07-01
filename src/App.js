import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alerts from './Components/Alerts';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode,Setmode]=useState('light');
  const [tColor,SettColor]=useState('dark');
  const [alert,setalert]=useState(null);
  
  const showAlert=(message,type)=>{
setalert({
  msg:message,
  typ:type
})
setTimeout(() => {
  setalert(null )
}, 2000);
  } 

  const toggleMode=()=>{
    if(mode==='light'){
      Setmode('dark');
      SettColor('light');
      showAlert("Dark Mode Enabled","success")
    }
    else{
      Setmode('light');
      SettColor('dark');
      showAlert("Light Mode Enabled","success")
    }
  }
  return (
  <>
  <Router>
 
    <Navbar title="TextThings" About="About" mode={mode} toggleMode={toggleMode}  tColor={tColor}/>
    <Alerts alert={alert}/>
 
 
    <Routes>
          <Route path="/about"  element={<div className="container my-5"><About></About></div>}>
          </Route>

          <Route path="/" element={<div className="container my-3"><TextForm heading="Enter Text Below"/></div> }> 
         </Route>
   </Routes>



</Router>
  </>
  );
}

export default App;
