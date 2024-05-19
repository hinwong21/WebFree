import React, { useState } from "react";
import "./BarIcon.css";

interface BarIconProps {
  width?: string;
  height?: string;
  color?: string;
  animatedColor?: string;
}

export const BarIcon: React.FC<BarIconProps> = ({
  width,
  height,
  color,
  animatedColor,
}) => {
  const [animationState, setAnimationState] = useState(true);

  const handleOnClickBarIconAnimation = () => {
    setAnimationState(!animationState);
  };

  const barStyle = {
    width: width || "20px",
    height: height || "2px",
    backgroundColor: animationState ? color || "black" : animatedColor || "red",
  };

  return (
    <div className="barIconAnimation" onClick={handleOnClickBarIconAnimation}>
      <div
        className={`upperBar upperBarReverseAnimation ${{ barStyle }} ${
          !animationState ? "upperBarAnimation" : ""
        }`}
        style={barStyle}
      ></div>
      <div
        className={`lowerBar lowerBarReverseAnimation ${
          !animationState ? "lowerBarAnimation" : ""
        }`}
        style={barStyle}
      ></div>
    </div>
  );
};
