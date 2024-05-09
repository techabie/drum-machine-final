import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQ,
  faW,
  faE,
  faA,
  faS,
  faD,
  faZ,
  faX,
  faC,
} from "@fortawesome/free-solid-svg-icons";

function DrumPad({ id, keyVal, source, onClick }) {
  const iconSVG = () => {
    switch (keyVal) {
      case "Q":
        return faQ;
        break;
      case "W":
        return faW;
        break;
      case "E":
        return faE;
        break;
      case "A":
        return faA;
        break;
      case "S":
        return faS;
        break;
      case "D":
        return faD;
        break;
      case "Z":
        return faZ;
        break;
      case "X":
        return faX;
      case "C":
        return faC;
        break;
      default:
        return null;
    }
  };
  return (
    <button
      type="button"
      className="drum-pad box"
      id={id}
      value={keyVal}
      onClick={onClick}
    >
      <audio id={keyVal} src={source} className="clip"></audio>
      <FontAwesomeIcon className="icon" icon={iconSVG()} />
    </button>
  );
}

export default DrumPad;
