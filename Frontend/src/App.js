import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import {Routes, Route} from 'react-router-dom'


import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";

import Theme from "./Theme"


import Dashboard from "./pages/Dashboard/Dashboard";
import ResearchPapers from "./pages/Dashboard/ResearchPapers"
import CheckPlagiarism from "./pages/Dashboard/CheckPlagiarism";
import CompletePaper from "./pages/CompletePaper";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <ChakraProvider theme={Theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/dashboard">
            <Route index element={<Dashboard />} />
            <Route path="papers" element={<ResearchPapers />} />
            <Route path="plagiarism" element={<CheckPlagiarism />} />
          </Route>
          <Route path="/paper/:id" element={<CompletePaper />} />
        </Routes>
       </Router>
     </ChakraProvider>
  );
};

export default App;
