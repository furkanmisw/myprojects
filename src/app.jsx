import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import Project from "./pages/project";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectId" element={<Project />} />
      </Routes>
    </>
  );
};

export default App;
