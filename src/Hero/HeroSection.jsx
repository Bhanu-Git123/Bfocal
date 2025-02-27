import logo from "../assets/Frame.svg";
import image from "../assets/image.svg";
const HeroSection = () => {

    return (
      <div
        className="relative w-full h-screen flex flex-col items-center justify-center text-center text-black px-6 bg-[url('./assets/image.svg')]"
        style={{
          backgroundImage: "",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Navigation */}
        <nav className="absolute top-0 left-0 w-full bg-white/10 backdrop-blur-lg p-4 flex justify-between items-center">
  <img src={logo} alt="Logo" className="h-12 ml-6" />
  <ul className="flex space-x-6 text-lg font-semibold mr-6">
    <li>
      <a href="#" className="hover:text-blue-300 hover:underline hover:underline-offset-4 hover:decoration-blue-300">
        What We Do
      </a>
    </li>
    <li>
      <a href="#" className="hover:text-blue-300 hover:underline hover:underline-offset-4 hover:decoration-blue-300">
        Who We Are
      </a>
    </li>
    <li>
      <a href="#" className="hover:text-blue-300 hover:underline hover:underline-offset-4 hover:decoration-blue-300">
        Let's Connect
      </a>
    </li>
    <li>
      <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Contact Us
      </a>
    </li>
  </ul>
</nav>

        {/* Main Content */}
        <div className="max-w-3xl">
          <p className="text-lg mb-2">Home &gt; What We Do</p>
          <h1 className="text-4xl md:text-6xl font-bold">
            Transforming Businesses with Blockchain Innovation
          </h1>
          <p className="text-lg mt-4">
            With our extensive expertise, strategic partnerships, and industry-leading capabilities, 
            we empower your business to evolve and reach its full potential.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 rounded-lg text-white text-lg font-semibold hover:bg-blue-700">
            Let's Discuss →
          </button>
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  