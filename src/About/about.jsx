import members from "../assets/members.svg";
const AboutUs = () => {
  return (
    <div className="relative mt-30 w-full h-96">
      {/* Background Image */}
      <img
        src={members}
        alt="Team meeting in conference room"
        className="w-full h-full object-cover"
      />

      {/* Black Overlay with Text */}
      <div className="absolute top-0 left-0 bg-black text-white w-5/12 h-full p-8 flex flex-col justify-center">
        <h2 className="text-3xl mb-4 font-normal">Who We Are</h2>
        <p className="text-sm leading-relaxed">
          Bfocal is revolutionizing business practices and fueling the growth of
          organizations with Blockchain global solutions. We are global leaders
          with extensive experience in creating customized, trusted end-to-end
          Blockchain solutions and services that help businesses to create an
          everlasting impact in this new era of digital transformation. We offer
          a wide range of innovative Blockchain value added services to help
          businesses in the adoption, integration and realization of Blockchain
          networks.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
