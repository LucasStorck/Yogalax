import "./App.css";
import BlogSection from "./assets/components/BlogSection";
import ClassesSection from "./assets/components/ClassesSection";
import FeaturesSection from "./assets/components/FeaturesSection";
import Footer from "./assets/components/Footer";
import GallerySection from "./assets/components/GallerySection";
import GoTop from "./assets/components/GoTop";
import HeroSection from "./assets/components/HeroSection";
import IntroSection from "./assets/components/IntroSection";
import NavBar from "./assets/components/NavBar";
import NumbersSection from "./assets/components/NumbersSection";
import PricingSection from "./assets/components/PricingSection";
import TestimonialsSection from "./assets/components/TestimonialsSection";

function App() {
  return (
    <>
      <div className="backgrundColor">
        <NavBar></NavBar>
        <HeroSection></HeroSection>
      </div>
      <IntroSection></IntroSection>
      <FeaturesSection></FeaturesSection>
      <ClassesSection></ClassesSection>
      <PricingSection></PricingSection>
      <TestimonialsSection></TestimonialsSection>
      <NumbersSection></NumbersSection>
      <BlogSection></BlogSection>
      <GallerySection></GallerySection>
      <Footer></Footer>
      <GoTop></GoTop>
    </>
  );
}

export default App;
