import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./FH/Header";
import Footer from "./FH/Footer";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Watchlater from "./Pages/Watchlater";
import Animation from "./Films/Animation";
import Classic from "./Films/Classic";
import Comedy from "./Films/Comedy";
import Drama from "./Films/Drama";
import Family from "./Films/Family";
import Horror from "./Films/Horror";
import Mystery from "./Films/Mystery";
import Western from "./Films/Western";
import Signin from "./Pages/Signin";  
import Signup from "./Pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/watchlater" element={<Watchlater />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/classic" element={<Classic />} />
        <Route path="/comedy" element={<Comedy />} />
        <Route path="/drama" element={<Drama />} />
        <Route path="/family" element={<Family />} />
        <Route path="/horror" element={<Horror />} />
        <Route path="/mystery" element={<Mystery />} />
        <Route path="/western" element={<Western />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
