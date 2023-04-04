import "./App.css";
import React, {lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ContactAbout from './Pages/ContactAbout';
import Work from './Pages/Work';
import Connect from "./Pages/Connect";

const Aprender = lazy(()=> import("./Pages/Aprender"));
const StateFair = lazy(()=> import("./Pages/StateFair"));
const Somo = lazy(()=> import("./Pages/Somo"));

function App() {
  return (
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aprender" element={<Aprender />}></Route>
        <Route path="/somo" element={<Somo />}></Route>
        <Route path="/state-fair" element={<StateFair />}></Route>
        <Route path="/contact-about" element={<ContactAbout />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/connect" element={<Connect />}></Route>
      </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
