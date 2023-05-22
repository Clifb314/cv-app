import './App.css';
import React, { useState } from "react";
import Form from './components/form';
import Education from './components/education';
import Employment from './components/employ';

function App() {
  return (
    <div className="App">
      <Form />
      <Education />
      <Employment />
    </div>
  );
}

export default App;
