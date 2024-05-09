import React, { useState } from "react";
import DrumPad from "./DrumPad";
import PowerBtn from "./PowerBtn";

function Display({
  onClick,
  allKeys,
  displayName,
  handleVolumeChange,
  volumeDisplay,
  powerState,
  handlePowerBtn,
}) {
  const keyPads = allKeys.map((each) => {
    return (
      <DrumPad
        key={each.key}
        id={each.name}
        keyVal={each.key}
        source={each.source}
        onClick={onClick}
      ></DrumPad>
    );
  });
  /*
  
*/
  return (
    <section>
      <div id="display" className="wrapper row">
        {keyPads}

        <div className="name-box">{displayName}</div>
        <div>
          <div>{Math.floor(volumeDisplay * 100)}</div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            defaultValue=".5"
            onChange={handleVolumeChange}
          ></input>
        </div>
        <PowerBtn
          powerState={powerState}
          handlePowerBtn={handlePowerBtn}
        ></PowerBtn>
      </div>
    </section>
  );
}

export default Display;
