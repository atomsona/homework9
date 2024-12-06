import React, { useRef, useState } from "react";
import "./ImageZoom.css";

const ImageZoom = () => {
  const imgRef = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(2)",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "scale(1)",
      transformOrigin: "center center",
    });
  };

  return (
    <div className="image-zoom">
      <img
        ref={imgRef}
        src="https://chandler.on.ge/2021/11/10/shida.jpg"
        alt="Zoomable"
        style={style}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default ImageZoom;
