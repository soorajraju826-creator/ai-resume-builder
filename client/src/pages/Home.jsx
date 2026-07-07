import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar />

      <Hero />

      <Stats />

      <Features />

      <HowItWorks />

    </div>
  );
}

export default Home;