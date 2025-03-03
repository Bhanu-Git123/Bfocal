import AboutUs from "./About/about";
import Home from "./Home/home";
import StatsSection from "./Mission/mission";
import MissionSection from "./Services1/services1";
function App() {
  return (
    <div className="text-black">
      <Home />
      <AboutUs />
      <StatsSection />
      <MissionSection />
    </div>
  );
}
export default App;
