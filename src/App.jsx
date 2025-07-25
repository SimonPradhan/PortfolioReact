import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import WaveformAudioPlayer from "./components/WaveformAudioPlayer";
import ThreadsVisualizerPlayer from "./components/ThreadsVisualizerPlayer";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Home />
        <Skills />
        <Project />
        <Contact />
        <div className="fixed bottom-0 left-0 w-full bg-gray-900/90 py-3 shadow-lg">
          <div className="max-w-lg mx-auto px-4">
            <ThreadsVisualizerPlayer audioUrl="/audio/song.mp3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
