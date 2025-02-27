import r3 from "../assets/Group.svg";
import DigitalAssets from "../assets/Clippathgroup.svg";
import Parfin from "../assets/Parfin.svg";
import Ripple from "../assets/Ripple.svg";
import Hyperledger from "../assets/Hyperledger.svg";
import AWS from "../assets/AWS.svg";
import React from "react";

const Images = () => {
  return (
    <div className="flex items-center justify-center p-6">
      <div className="grid grid-cols-6 gap-40 place-items-center w-full max-w-6xl">
        <img src={r3} alt="r3" className="h-12" />
        <img src={DigitalAssets} alt="Digital Asset" className="h-12" />
        <img src={Parfin} alt="Parfin" className="h-12" />
        <img src={Ripple} alt="Ripple" className="h-12" />
        <img src={Hyperledger} alt="Hyperledger" className="h-12" />
        <img src={AWS} alt="AWS" className="h-12" />    
      </div>
    </div>
  );
};

export default Images;
