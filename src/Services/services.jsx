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
  {
    title: "Cloud Development",
    description:
      "We Guide Our Clients Through Seamless Cloud Migration, Optimize Their Cloud Investments, And Build Robust, Scalable Architectures With Our Cloud-Managed Services, We Take Of Your Cloud Operations So You Can Focus On Growing Your Business.",
    points: ["Cloud Consulting", "Cloud Management Service"],
    img: ServiceIllustration,
  },
  {
    title: "Digital Transformation",
    description:
      "Our Digital Transformation Services Drive Industry Innovation, Helping Businesses Adapt, Scale, And Thrive. From AI-Driven Solutions To Cloud And Blockchain Integration, We Empower Organizations To Build Resilient, Future-Ready Enterprises. ",
    points: [
      "Supply Chain Management",
      "Asset Management",
      "App Modernization",
    ],
    img: ServiceIllustration,
  },
  {
    title: "Ideation & Design",
    description:
      "We Craft, Design, And Engineer Innovative Solutions Through Our Ideation And Product Design Services, Delivering Exceptional Value. Our Designs Captivate Audiences With Unparalleled Quality And Creativity Ensuring Your Products Stand Out In The  Market.",
    points: ["UI/UX Design", "Product Management"],
    img: ServiceIllustration,
  },
  {
    title: "DevOps ",
    description:
      "Through An Endless Cycle Of Continuous Integration And Delivery We Accelerate Development And Drive Your Business Growth To New Heights, Delivering Results Like Never Before.",
    points: ["SaaS Development", "MVP Development"],
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
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
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
