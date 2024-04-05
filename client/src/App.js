import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
const App = () => {



  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
       
          <Routes>
            <Route exact path="/" element={<Landing/>} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login  />} />
            <Route exact path="/signup" element={<Signup  />} />
          </Routes>
          <Footer />
        </Router>
      </NoteState>
    </>
  );
};

export default App;
