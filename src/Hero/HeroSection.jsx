import logo from "../assets/Frame.svg";
import image from "../assets/bgimg.svg";
const HeroSection = () => {
  return (
    <div className="bg-cover  w-full h-screen flex flex-col py-20 items-center text-center text-black px-6 relative">
      <img
        src={image}
        className="absolute z-10 top-0 left-0 w-screen h-full object-cover"
        alt="bg"
      />
      {/* Main Content */}
      <div className=" min-w-full relative z-20 text-white">
        <p className="text-lg mb-2 w-full text-left">Home &gt; What We Do</p>
        <div className="w-full flex flex-col items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold pt-32">
              Transforming Businesses with Blockchain Innovation
            </h1>
            <p className="text-lg mt-4">
              With our extensive expertise, strategic partnerships, and
              industry-leading capabilities, we empower your business to evolve
              and reach its full potential.
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-600 rounded-lg text-white text-lg font-semibold hover:bg-blue-700">
              Let's Discuss →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
