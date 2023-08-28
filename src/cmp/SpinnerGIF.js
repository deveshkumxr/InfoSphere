import React from "react";
import Loading from "./Loading.gif";

export default function SpinnerGIF() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img src={Loading} alt="Loading GIF" />
    </div>
  );
}
