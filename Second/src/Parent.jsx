import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Parent() {
  return (
    <div>
      <Navbar />
      <Outlet /> 
    </div>
  );
}

export default Parent;
