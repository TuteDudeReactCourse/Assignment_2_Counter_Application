import React from "react";
import FunctionalCounter from "./components/FunctionalCounter";
import ClassCounter from "./components/ClassCounter";

const App = () => {
  
  return (
    <div className="bg-[#f7f8f9] w-screen h-screen flex flex-col justify-center items-center gap-10">
      <h1 className="text-5xl">Assignment-2 Counter Application</h1>

      <div className="flex gap-10">
        {/* <FunctionalCounter/> */}
        <FunctionalCounter/>
       
       {/* Class Counter */}
       <ClassCounter/>
      </div>

      <h1 className="text-gray-500">Counter Cannot Be Negative</h1>

    </div>
  );
};

export default App;
