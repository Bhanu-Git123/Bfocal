import React from "react";
import ServiceIllustration from "../assets/MobileDevelopment.svg";
const services = [
  {
    title: "Mobile App Development",
    description:
      "We build secure, scalable, and decentralized mobile applications powered by Blockchain technology. Our expert team ensures seamless integration of decentralized solutions, delivering next-gen apps for businesses across industries.",
    points: [
      "iOS & Android App Dev",
      "UI/UX Excellence",
      "Custom App Solutions",
      "Cross-Platform Dev",
    ],
    img: ServiceIllustration,
  },
  {
    title: "Software Development",
    description:
      "We are BFocal—agile, innovative, and driven by excellence. We craft tailored software solutions that directly address your challenges, delivering real value and unlocking new revenue opportunities.",
    points: [
      "Custom Blockchain Development",
      "IoT Development",
      "ERP Software Development",
      "Custom CRM Development",
    ],
    img: ServiceIllustration,
  },

  // Add 4 more services here...
];

const ServicesSection = () => {
  return (
    <div className=" mx-38  py-12 flex flex-col gap-12">
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex gap-8 my-10  outline-black ${
            index % 2 === 0 ? "flex-row-reverse" : "flex-row"
          } items-center`}
        >
          <div className="flex-[0.6]">
            <img src={service.img} alt="ServiceIllustration" className=" " />
          </div>
          <div className="flex-1 ">
            <h2 className="text-2xl font-bold text-blue-600">
              {service.title}
            </h2>
            <p className="text-gray-600 mt-4">{service.description}</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              {service.points.map((point, i) => (
                <li key={i} className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  {point}
                </li>
              ))}
            </ul>
            <button className="mt-4 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
              Know more →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;
