import Navbar from './components/Navbar';
import Text from './components/Text';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (s, type) => {
    setalert({
      statement: s,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const f1 = (title1) => {
    document.body.classList.remove("bg-dark", "bg-light", "bg-danger");
 if (title1) {
   document.body.classList.add('bg-' + title1); 
 }
 else{ setMode((prevMode) => {
      const newMode = prevMode === "dark" ? "light" : "dark";
      const newBackground = newMode === "dark" ? "white" : "#808080";
      document.body.style.background = newBackground;
      showalert(`${newMode} mode`, "warning");
      return newMode;
    });
  }};
  

  return (
    <>
    <Router>
      <Navbar title="Myapp" mode={mode} f={f1} />
      <Alert f1={alert} />
      
        <div className='container'>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Text title="enter the details" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
