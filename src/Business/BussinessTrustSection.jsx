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
        image:tailored,
      },
      {
        title: "Commitment to Quality",
        description:
          "Our dedication to excellence ensures that all our solutions are thoroughly tested, secure, and optimized for the best user experience.",
        image: End,
      },
    ];
  
    return (
      <section className="bg-gray-100 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Businesses Trust Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center"
            >
              <img src={point.image} alt={point.title} className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {point.title}
              </h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  