import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { FaPlay, FaPause } from "react-icons/fa";

const WaveformAudioPlayer = ({ audioUrl }) => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!waveformRef.current) return;

    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#999",
      progressColor: "#1DB954", // Spotify green
      cursorColor: "#1DB954",
      barWidth: 2,
      barRadius: 2,
      responsive: true,
      height: 40,
      normalize: true,
    });

    wavesurfer.current.load(audioUrl);

    wavesurfer.current.on("ready", () => {
      wavesurfer.current.play();
      setPlaying(true);
    });

    wavesurfer.current.on("finish", () => {
      setPlaying(false);
    });

    return () => {
      wavesurfer.current.destroy();
    };
  }, [audioUrl]);

  const togglePlay = () => {
    if (!wavesurfer.current) return;
    wavesurfer.current.playPause();
    setPlaying(!playing);
  };

  return (
    <div className="w-full max-w-md bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-4 shadow-lg border border-white/20">
      <button
        onClick={togglePlay}
        className="text-green-400 text-lg w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition"
        aria-label={playing ? "Pause" : "Play"}
      >
        {playing ? <FaPause /> : <FaPlay className="ml-[2px]" />}
      </button>

      <div className="w-full" ref={waveformRef}></div>
    </div>
  );
};

export default WaveformAudioPlayer;
