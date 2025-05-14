import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmailInput from "./components/EmailInput";
import Status from "./components/Status";
import About from "./components/About";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmailInput />} />
        <Route path="/detect" element={<Status />} />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
  );
};

export default App;
