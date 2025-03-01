import React from "react";
import exp from "../assets/2Exp.svg";
import tailored from "../assets/Tailored.svg";
import End from "../assets/End.svg";

export default function BusinessTrustSection() {
  const trustPoints = [
    {
      title: "2+ Years of Experience",
      description:
        "With years of industry experience, we deliver innovative, reliable, and secure solutions that meet the unique needs of each client.",
      image: exp,
    },
    {
      title: "Tailored Solutions",
      description:
        "We understand that every business is different, and we create custom solutions that align with your specific goals and challenges.",
      image: tailored,
    },
    {
      title: "End-to-end Support",
      description:
        "From ideation and development to deployment and maintenance, we offer comprehensive support throughout the entire project lifecycle.",
      image: End,
    },
    {
      title: "Cutting-Edge Technologies",
      description:
        "We stay ahead of the curve by leveraging the latest technologies, ensuring your business benefits from modern, scalable solutions.",
      image: exp,
    },
    {
      title: "User-Centric Approach",
      description:
        "We prioritize clear communication, collaboration, and continuous feedback to ensure your vision is realized to perfection.",
      image: tailored,
    },
    {
      title: "Commitment to Quality",
      description:
        "Our dedication to excellence ensures that all our solutions are thoroughly tested, secure, and optimized for the best user experience.",
      image: End,
    },
  ];

  return (
    <section className="bg-blue py-16 px-4 md:px-6 lg:px-8 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-16">
          Why Businesses Trust Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-lg shadow-sm flex flex-col items-center"
            >
              <div className="mb-4">
                <img
                  src={point.image}
                  alt={point.title}
                  className="w-12 h-12 text-blue-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-500 mb-3 text-center">
                {point.title}
              </h3>
              <p className="text-grey-600 text-center text-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
