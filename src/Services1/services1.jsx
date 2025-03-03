import React from "react";
import Mission from "../assets/mission.svg";
import Vission from "../assets/vission.svg";

const MissionSection = () => {
  return (
    <div className="flex w-full items-center justify-center px-20 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl">
        {/* Mission Section (Image Left, Text Right) */}
        <div className="flex justify-center order-1">
          <img
            src={Mission}
            alt="Mission"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center order-2">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to empower businesses by providing robust, secure,
            and scalable Blockchain solutions that drive innovation, enhance
            operational efficiency, and create lasting value. We aim to help
            organizations embrace the future through Blockchain technology and
            digital transformation, enabling them to thrive in an increasingly
            digital world.
          </p>
        </div>

        {/* Vision Section (Image Right, Text Left) */}
        <div className="flex flex-col justify-center order-4 md:order-3">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-600">
            We envision a world where businesses can leverage Blockchain
            technology to create transparent, efficient, and trustworthy systems
            that power their operations and bring value to their customers. At
            Bfocal, we are committed to being at the forefront of this
            revolution, offering innovative solutions that ensure your business
            stays ahead of the curve.
          </p>
        </div>
        <div className="flex justify-center order-3 md:order-4">
          <img
            src={Vission}
            alt="Vision"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
