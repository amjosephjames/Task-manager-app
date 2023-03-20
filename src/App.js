import React from "react";
import Landing from "../src/components/landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./components/dashboard";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
