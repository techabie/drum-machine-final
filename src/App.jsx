import { useState, useEffect } from "react";

import "./App.css";
import Display from "./Display";

function App() {
  const [keyName, setKeyName] = useState("");
  const [volume, setVolume] = useState(".5");
  const [powerState, setPowerState] = useState("true");
  const [isActive, setActive] = useState("false");
  const handlePowerBtn = () => {
    setPowerState(!powerState);
  };

  const drumKeys = [
    {
      key: "Q",
      name: "Heater1",
      source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      key: "W",
      name: "Heater2",
      source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      key: "E",
      name: "Heater3",
      source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      key: "A",
      name: "Heater4",
      source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      key: "S",
      name: "Clap",
      source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      key: "D",
      name: "Open-HH",
      source: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      key: "Z",
      name: "Kick-n'-Hat",
      source: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      key: "X",
      name: "Kick",
      source: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      key: "C",
      name: "Closed-HH",
      source: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  const keyArr = drumKeys.map((each) => each.key);

  //using useEffect to handle key press
  const handleKeyPress = (event) => {
    console.log(powerState);

    const keyPressed = event.key.toUpperCase();
    if (keyArr.includes(keyPressed)) {
      let keyObject = [];
      keyObject = drumKeys.filter((each) => each.key === keyPressed);
      setKeyName(keyObject[0].name);
      setActive("true");
      document
        .getElementById(keyPressed)
        .classList.add(isActive ? "active" : "");
      setTimeout(() => {
        document.getElementById(keyPressed).classList.remove("active");
      }, 250);
      document.getElementById(keyPressed).volume = volume;
      document.getElementById(keyPressed).currentTime = 0;
      document.getElementById(keyPressed).play();
    }
  };
  useEffect(() => {
    if (powerState) {
      window.addEventListener("keydown", handleKeyPress);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [powerState]);

  //handle button click
  const handleClick = (e) => {
    if (powerState) {
      if (e.target.value !== null) {
        setKeyName(e.target.id);
        document;
        e.target.firstElementChild.classList.add(isActive ? "active" : "");
        setTimeout(() => {
          document;
          e.target.firstElementChild.classList.remove("active");
        }, 250);
        e.target.firstElementChild.volume = volume;
        e.target.firstElementChild.currentTime = 0;
        e.target.firstElementChild.play();
      }
    }
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  return (
    <div id="drum-machine" className="container">
      <Display
        allKeys={drumKeys}
        onClick={handleClick}
        displayName={keyName}
        handleVolumeChange={handleVolumeChange}
        volumeDisplay={volume}
        powerState={powerState}
        handlePowerBtn={handlePowerBtn}
      />
    </div>
  );
}

export default App;
