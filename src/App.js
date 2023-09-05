import "./App.css";
import React, { Suspense, useEffect } from "react";
import { HashRouter as Router, Routes, Route, ScrollRestoration } from "react-router-dom";
import Home from "./Pages/Home";


const Aprender = React.lazy(()=> import("./Pages/Aprender"));
const StateFair = React.lazy(()=> import("./Pages/StateFair"));
const Somo = React.lazy(()=> import("./Pages/Somo"));
const ContactAbout = React.lazy(()=> import("./Pages/ContactAbout"));
const Work= React.lazy(()=> import("./Pages/Work"));
const Connect = React.lazy(()=> import("./Pages/Connect"));

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
