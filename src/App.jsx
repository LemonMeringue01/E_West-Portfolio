import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ViewCV from "./pages/ViewCV";
import './App.css'


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ViewCV" element={<ViewCV />} />
      </Routes>
    </Router>
  );
}



/*<html>
  <head>
    <title>PDF Example by Object Tag</title>
  </head>
  <body>
    <h1>PDF Example by Object Tag</h1>
    <object data="https://www.w3docs.com/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf" type="application/pdf" width="100%" height="500px">
      <p>Unable to display PDF file. <a href="https://www.w3docs.com/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf">Download</a> instead.</p>
    </object>
  </body>
</html>*/


