import React from "react";
import Toggle from "react-bootstrap-toggle";
function PowerBtn({ handlePowerBtn, powerState }) {
  return (
    <div>
      <Toggle
        id="power-btn"
        onClick={handlePowerBtn}
        on="ON"
        off="OFF"
        offstyle="danger"
        active={powerState}
        size="l"
      />
    </div>
  );
}

export default PowerBtn;
