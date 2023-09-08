import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../screens/Home";
import Project from "../screens/Project";
import Test from "../screens/Test";
import NotFound from "../screens/NotFound";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/test" element={<Test />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
