import React, { useState } from "react";

const FunctionalCounter = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount((prev) => {
      if (prev === 0) {
        alert("Count can't be negative");
        return 0;
      }
      return prev - 1;
    });
  };

  const handleIncrement = ()=>{
    setCount((prev) => prev + 1);
  }

  return (
    <div className="bg-white w-[350px] h-[300px] m-auto mt-10 p-5 flex flex-col gap-4 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center">Functional Counter</h1>

      <h1 className="text-8xl  text-center">{count}</h1>

      <div className="flex gap-5 items-center justify-center">
        <button
          onClick={handleDecrement}
          className="bg-red-300 border border-red-900 text-5xl w-1/2 cursor-pointer"
        >
          -
        </button>
        <button
          onClick={handleIncrement}
          className="bg-green-300 border border-green-900 text-5xl w-1/2  cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default FunctionalCounter;
