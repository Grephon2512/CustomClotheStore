import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";
import { color } from "framer-motion";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disabledAlpha
        presetColors={[
          "#007BFF",
          "#FF007F",
          "#FF4500",
          "#C0A25C",
          "#F8F7F3",
          "#708238",
          "#D4B483",
          "#C48B8B",
          "#D4A017",
        ]}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
