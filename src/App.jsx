import React from "react";
import { Outlet } from "react-router-dom";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div>
      <Home />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
