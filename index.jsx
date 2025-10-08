const pads = [
  { key: "Q", id: "Heater-1", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
  { key: "W", id: "Heater-2", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
  { key: "E", id: "Heater-3", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
  { key: "A", id: "Heater-4", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
  { key: "S", id: "Clap", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
  { key: "D", id: "Open-HH", url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
  { key: "Z", id: "Kick-n'-Hat", url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
  { key: "X", id: "Kick", url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
  { key: "C", id: "Closed-HH", url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }
];

function App() {
  const [display, setDisplay] = React.useState("");

  React.useEffect(() => {
    const handler = (e) => {
      const key = e.key.toUpperCase();
      const pad = pads.find(p => p.key === key);
      if (pad) playSound(key, pad.id);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const playSound = (key, name) => {
    const audio = document.getElementById(key);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    setDisplay(name);
  };

  return (
    <div id="drum-machine" className="machine">
      <div className="left">
        {pads.map(p => (
          <div
            key={p.key}
            className="drum-pad"
            id={p.id}
            onClick={() => playSound(p.key, p.id)}
          >
            {p.key}
            <audio className="clip" id={p.key} src={p.url}></audio>
          </div>
        ))}
      </div>

      <div className="right">
        <div id="display" className="display">{display || "Play a pad or press a key"}</div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
