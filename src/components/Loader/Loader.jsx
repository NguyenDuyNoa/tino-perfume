import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="bg-black/30 w-full h-[100vh] flex justify-center items-center z-[999] fixed overflow-hidden top-0">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
