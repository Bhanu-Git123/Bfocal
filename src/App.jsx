import HeroSection from "./Hero/HeroSection";
import Images from "./Images/images";
import ServicesSection from "./Services/services";
import BusinessTrustSection from "./Business/BussinessTrustSection";
 function App() {
  return (
    <div className="text-black">
      
      <HeroSection />
      <Images/>
      <ServicesSection/>
      <BusinessTrustSection />
    </div>
  );
}
export default App;