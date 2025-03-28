import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import CardList from "./components/CardList";

function App() {
  return (
    <>
    <NavigationBar />
    <CardList />
  </>
  );
}

export default App;
