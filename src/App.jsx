import HeroSection from "./Hero/HeroSection";
import Images from "./Images/images";
import ServicesSection from "./Services/services";
import BusinessTrustSection from "./Business/BussinessTrustSection";
import Question from "./Qouestions/qouestion";
import FAQ from "./FAQ/faq";
import BlogPage from "./Blog/blogpage";
function App() {
  return (
    <div className="text-black">
      <HeroSection />
      <Images />
      <ServicesSection />
      <BusinessTrustSection />
      <Question />
      <FAQ />
      <BlogPage />
    </div>
  );
}
export default App;
