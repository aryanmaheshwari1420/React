import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";


function App() {
  const [mode, setMode]   = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor='#042743';
      document.body.style.color='white';
      showAlert("Dark Mode has been enabled", "Success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      showAlert("Light Mode has been enabled", "Success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>  
      <div className="container my-3">
          <TextForm heading="Enter the text to analyze below"  showAlert={showAlert}/> 
      </div>
      </>
  );
}

export default App;
