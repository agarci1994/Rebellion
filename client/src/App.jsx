import React, { useState } from "react";

//Components
import Nav from "./components/UI/Nav";
import Statistics from './components/Statistics'
// CSS
import "./App.css";

const App = () => {
  return (
    <div>
      <Nav />
      <Statistics />
    </div>
  );
};

export default App;
