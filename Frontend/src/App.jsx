import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import CardList from "./components/CardList";
import CardDetails from "./pages/CardDetails";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/card/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
