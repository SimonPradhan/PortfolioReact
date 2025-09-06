import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";

const ThreadsVisualizerPlayer = ({ audioUrl }) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); // default volume 50%

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (playing) {
        audio.pause();
      } else {
        audio.play();
      }
      setPlaying(!playing);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;

    const handleEnded = () => setPlaying(false);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [volume]);

  return (
    <div   className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 flex items-center gap-4 border transition-shadow duration-300 ${
    playing
      ? "border-white/60 shadow-[0_0_12px_rgba(255,255,255,0.8)]"
      : "border-white/20 shadow-lg"
  }`}>
      <button
        onClick={togglePlay}
        className="text-gray-400 text-lg w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition"
        aria-label={playing ? "Pause" : "Play"}
      >
        {playing ? <FaPause /> : <FaPlay className="ml-[2px]" />}
      </button>

      <div className="flex items-end gap-[4px] h-6">
        {[0, 1, 2, 3, 4].map((bar) => (
          <div
            key={bar}
            className={`w-[4px] rounded-full bg-gray-400 transition-all duration-300 ${
              playing ? `animate-wave animate-delay-${bar}` : 'h-2'
            }`}
          ></div>
        ))}
      </div>

      {/* Volume Control */}
      <div className="flex items-center gap-2 ml-4">
        <FaVolumeUp className="text-white text-sm" />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-24 h-1 rounded-full appearance-none bg-gray-500 accent-gray-500"
        />
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} src={audioUrl} preload="auto" />
    </div>
  );
};

export default ThreadsVisualizerPlayer;
