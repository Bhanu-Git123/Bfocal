import hands from "../assets/hands.svg";
import frame from "../assets/frame1.svg";

const Home = () => {
  return (
    <>
      <div className="bg-cover w-full h-screen flex flex-col py-20 items-center text-center text-black px-6 relative">
        <img
          src={hands}
          className="absolute z-10 top-0 left-0 w-screen h-full object-cover"
          alt="hands"
        />
        {/* Main Content */}
        <div className="min-w-full relative z-20 text-white">
          <p className="text-lg mb-2 w-full text-left">Home &gt; What We Do</p>
          <div className="w-full flex flex-col items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold pt-32">
                Driven By Collaboration,
              </h1>
              <h1 className="text-4xl md:text-6xl font-bold pt-5">
                Powered By Innovation
              </h1>
              <p className="text-lg mt-4">
                Together, We Innovate, Build, And Deliver Exceptional Solutions
                That Drive Your
              </p>
              <p className="text-lg mt-4">Business Forward.</p>
              <button className="mt-4 px-4 py-2 border border-white text-white rounded-lg hover:bg-blue-600 hover:text-white">
                Get In Touch →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Frame Image After Main Content */}
      <img src={frame} alt="frame" className=" w-full pt-20" />
    </>
  );
};

export default Home;
