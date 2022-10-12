import React from "react";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import MovieDetails from "./pages/MovieDetails";
import GlobalStyle from "./components/GlobalStyle";
import { Routes, Route, Switch,useLocation } from "react-router-dom";
// animation
import {AnimatePresence} from "framer-motion";

function App() {
  const loc = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes key={loc.pathname} location={loc}>
          <Route path="/" element={<AboutUs />} exact />
          <Route path="/work" element={<OurWork />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/work/:id" element={<MovieDetails/>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
