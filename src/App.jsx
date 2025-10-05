import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import SamsungAnalysis from "./pages/Research";

// Create a Layout component for your main page
function MainLayout() {
  return (
    <>
      <Home />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="container mx-auto px-8">
          <Navbar />
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/samsung-analysis" element={<SamsungAnalysis />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;