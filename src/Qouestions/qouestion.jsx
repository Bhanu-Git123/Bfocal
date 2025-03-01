import React from "react";
import Background from "../assets/Background.svg";

const Question = () => {
  return (
    <div className="bg-cover w-full h-screen flex flex-col py-20 items-center text-center text-black px-6 relative">
      <img
        src={Background}
        className="absolute z-10 top-0 left-50 w-3/4 h-3/4 object-cover rounded-xl"
        alt="bg"
      />
      <div className="absolute z-20  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-3/4 ">
        <p className="text-lg font-bold">
          Ready To Unlock The Power Of Blockchain
        </p>
        <p className="text-lg font-bold">
          Blockchain Of Your Business Transformation?
        </p>
        <button className="mt-4 px-4 py-2 border border-white-600 text-white-600 rounded-lg hover:text-white ">
          Contact Our Experts →
        </button>
      </div>
    </div>
  );
};

export default Question;
