import React, { useState, useEffect } from "react";
import siteplanImage from 'src/assets/images/siteplan-full.png';
import "./Siteplan.css";

const Siteplan = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [houseInfo, setHouseInfo] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  const markers = [
    { id: 1, x: 0.467, y: 0.71, info: "Informasi Rumah 1" },
    { id: 2, x: 0.49, y: 0.71, info: "Informasi Rumah 2" },
    { id: 3, x: 0.51, y: 0.71, info: "Informasi Rumah 3" },
    { id: 4, x: 0.53, y: 0.71, info: "Informasi Rumah 4" },
    { id: 5, x: 0.55, y: 0.71, info: "Informasi Rumah 5" },
    { id: 6, x: 0.57, y: 0.71, info: "Informasi Rumah 6" },
    { id: 7, x: 0.59, y: 0.71, info: "Informasi Rumah 7" },
    { id: 8, x: 0.61, y: 0.71, info: "Informasi Rumah 8" },
    { id: 9, x: 0.63, y: 0.71, info: "Informasi Rumah 9" },
    { id: 11, x: 0.65, y: 0.71, info: "Informasi Rumah 10" },
    { id: 12, x: 0.67, y: 0.71, info: "Informasi Rumah 11" },
    { id: 13, x: 0.69, y: 0.71, info: "Informasi Rumah 12" },
    
    // Tambahkan titik dan posisi tooltip lainnya di sini
  ];

  const handleMarkerClick = (info, x, y) => {
    setTooltipVisible(true);
    setHouseInfo(info);
    setTooltipPosition({ x, y });
  };

  useEffect(() => {
    const handleResize = () => {
      const image = document.querySelector(".siteplan-image");
      if (image) {
        const { width, height } = image.getBoundingClientRect();
        setImageSize({ width, height });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="siteplan-container">
      <div className="image-container">
        <img
          src={siteplanImage}
          alt="test"
          className="siteplan-image"
          onLoad={() => {
            const image = document.querySelector(".siteplan-image");
            const { width, height } = image.getBoundingClientRect();
            setImageSize({ width, height });
          }}
        />
        {markers.map((marker) => (
          <div
            key={marker.id}
            className="marker"
            style={{
              top: `${marker.y * imageSize.height}px`,
              left: `${marker.x * imageSize.width}px`,
              transformOrigin: "center",
            }}
            onClick={() =>
              handleMarkerClick(marker.info, marker.x, marker.y)
            }
          ></div>
        ))}
        {tooltipVisible && (
          <div
            className="tooltip"
            style={{
              top: `${tooltipPosition.y * imageSize.height + -10}px`,
              left: `${tooltipPosition.x * imageSize.width}px`,
              transform: "translate(-50%, -100%)",
              visibility: "visible",
            }}
          >
            <p>{houseInfo}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Siteplan;
