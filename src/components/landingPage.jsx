
import Navbar from "./Navbar.jsx";
import Steps from "./Steps.jsx";
import Details from "./Detail.jsx";
import Reason from "./Reason.jsx";
import Variety from "./Variety.jsx";
import Footer from "./Footer.jsx";
import BrandLogos from "./BrandLogos.jsx";
import HeroSection from "./HeroSection.jsx";
import BrowseCars from "./BrowseCars"

function LandingPage() {
  return (
    <>
      <Navbar />
      <div id="Home">
        <HeroSection/>
        <BrandLogos />
        <Steps />
        <Details />
        <BrowseCars/>
        <Reason />
        <Variety />
        <Footer />
      </div>

      {/* Add these to your global CSS or as a style tag */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </>
  );
}

export default LandingPage;
