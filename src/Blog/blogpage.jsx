import React from "react";
import Logo from "../assets/Frame.svg";

const BlogPage = () => {
  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="p-6 bg-white flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="Logo" className="h-12" />
          <div>
            <p className="text-sm">
              P.No.118, Kavuri Hills, G.B Pet, Telangana, India - 500033
            </p>
            <p className="text-sm">Phone: +91 8886226128</p>
            <p className="text-sm">Email: team@bfocal.com</p>
          </div>
        </div>
        <nav className="space-x-6">
          <a href="#" className="text-gray-700">
            About Us
          </a>
          <a href="#" className="text-gray-700">
            Services
          </a>
          <a href="#" className="text-gray-700">
            Industries
          </a>
          <a href="#" className="text-gray-700">
            Contact Us
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="p-10 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Related Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <img
              src="/path-to-image1.jpg"
              alt="Blockchain Guide"
              className="rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-4">
              An Entrepreneur’s Guide on the Blockchain Technology and Its Uses
            </h3>
            <a href="#" className="text-blue-500 mt-2 inline-block">
              Read more →
            </a>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <img
              src="/path-to-image2.jpg"
              alt="Blockchain App"
              className="rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-4">
              A Comprehensive Guide on Blockchain App Development Cost
            </h3>
            <a href="#" className="text-blue-500 mt-2 inline-block">
              Read more →
            </a>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <img
              src="/path-to-image3.jpg"
              alt="Crypto Wallet"
              className="rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-4">
              How Much Does It Cost to Make A Crypto Wallet App on Blockchain?
            </h3>
            <a href="#" className="text-blue-500 mt-2 inline-block">
              Read more →
            </a>
          </div>
        </div>
      </main>

      {/* Light Blue Section */}
      <section className="bg-blue-100 p-10 text-center">
        <h3 className="text-xl font-semibold">Subscribe Our Newsletter</h3>
        <p className="text-gray-600 mb-4">
          Receive exclusive stories in your inbox twice a month
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Your mail address"
            className="p-2 border border-gray-300 rounded-l-md w-64"
          />
          <button className="bg-blue-500 text-white px-4 rounded-r-md">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
