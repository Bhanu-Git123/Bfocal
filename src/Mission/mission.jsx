import blue from "../assets/blue.svg"; // Ensure the path is correct

const StatsSection = () => {
  return (
    <div className="relative mt-30 w-[80%] flex justify-center items-center ml-40">
      {/* Background Image */}
      <img
        src={blue}
        alt="Blue background"
        className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
      />

      {/* Content */}
      <div className="relative w-full max-w-6xl px-6 py-12 md:py-16 text-white text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h2 className="text-4xl font-bold">2+</h2>
            <div className=" w-12 h-1 bg-white mt-2 ml-25"></div>
            <p className="text-lg mt-5">Years Of Experience</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">100+</h2>
            <div className="w-18 h-1 bg-white mt-2 ml-23"></div>

            <p className="text-lg mt-5">Projects Successfully Delivered</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">99%</h2>
            <div className="w-18 h-1 bg-white mt-2 ml-23"></div>

            <p className="text-lg mt-5">Happy Clients</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">80%</h2>
            <div className="w-18 h-1 bg-white mt-2 ml-23"></div>

            <p className="text-lg mt-5">Repeat Business</p>
          </div>
        </div>

        {/* Button */}
        <button className="mt-20 px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition">
          Discuss Requirement →
        </button>
      </div>
    </div>
  );
};

export default StatsSection;
