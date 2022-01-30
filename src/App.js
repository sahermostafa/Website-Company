import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Display from "./components/Display/Display";
import Change from "./components/Change/Change";
import { Routes , Route  } from "react-router-dom";
import NoMatch from "./components/NoMatch/NoMatch";
import "./App.css";
function App(){  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route  path="/" exact element={ <Home/> } />
        <Route  path="/display" exact element={ <Display/> } />
        <Route  path="/change" exact element={ <Change/> } />
        <Route path="*" element={ <NoMatch/> } />
      </Routes>
      
    </div>
  );
}

export default App;

