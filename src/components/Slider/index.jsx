import React, { useState, useEffect } from "react";
import { slides } from "../../constant.js";

const Carousel = () => {
  const [curr, setCurr] = useState(0);

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative m-auto my-4 flex justify-center ">
      <div
        className="relative xl:w-[75%] w-[90%] block h-56 bg-cover rounded-lg md:h-96 transition duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${slides[curr].url})`,
        }}
      />
    </div>
  );
};

export default Carousel;
