import contact from "../assets/touch.svg";
const Contact = () => {
  return (
    <>
      <div className="bg-cover w-full h-screen flex flex-col py-20 items-center text-center text-black px-6 relative">
        <img
          src={contact}
          className="absolute z-10 top-0 left-0 w-screen h-full object-cover"
          alt="contact"
        />
        {/* Main Content */}
        <div className="min-w-full relative z-20 text-white">
          <div className="w-full flex flex-col items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold pt-32">
                Get In Touch
              </h1>
              <p className="text-lg mt-4 tracking-wider">
                Get All Your Questions By Our BlockChain Experts at BFocal
              </p>
              <button className="mt-4 px-4 py-2 border border-white text-white rounded-lg hover:bg-blue-600 hover:text-white">
                Send A Message →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
