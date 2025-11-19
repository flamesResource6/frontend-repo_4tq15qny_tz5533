import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Why from "./components/Why";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <Why />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
