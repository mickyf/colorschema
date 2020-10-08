import React from "react";
import "./Color.css";

interface Props {
  hue: number;
  sat: number;
  light: number;
}

function Color(props: Props) {
  return (
    <div
      className="color"
      style={{
        backgroundColor: `hsl(${props.hue}, ${props.sat}%, ${props.light}%)`,
      }}
    >
      {`${props.hue}, ${props.sat}%, ${props.light}%`}
    </div>
  );
}

export default Color;
