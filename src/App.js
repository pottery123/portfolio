import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Aprender from "./Pages/Aprender";
import Home from "./Pages/Home";
import Somo from "./Pages/Somo";
import StateFair from "./Pages/StateFair";
import ContactAbout from './Pages/ContactAbout';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aprender" element={<Aprender />}></Route>
        <Route path="/somo" element={<Somo />}></Route>
        <Route path="/state-fair" element={<StateFair />}></Route>
        <Route path="/contact-about" element={<ContactAbout />}></Route>
       
      </Routes>
    </Router>
  );
}

export default App;
