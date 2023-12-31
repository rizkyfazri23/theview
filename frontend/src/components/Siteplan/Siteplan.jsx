import React, { useState, useEffect } from "react";
import siteplanImage from 'src/assets/images/siteplan-full.png';
import { Link } from "react-router-dom";
import "./Siteplan.css";
import './../Loader/Loader.css';
import { fetchHouseData } from './../../api/api.js';


const Siteplan = ({ isApplyFilter, filterData }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [houseInfo, setHouseInfo] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [houseData, setHouseData] = useState([]);


  // const handleApplyFilter = (filterParams) => {
  //   setFilterParams(filterParams);
  // };

  useEffect(() => {
    const fetchData = async () => {
      const queryParams = {
        filterAvailable: filterData.filterAvailable,
        filterSoldOut: filterData.filterSoldOut,
        filter81to100: filterData.filter81to100,
        filter41to80: filterData.filter41to80,
        filter0to40: filterData.filter0to40,
        filter9072: filterData.filter9072, // Tambahkan filter Type 90/72
        filter7660: filterData.filter7660, // Tambahkan filter Type 76/60
        filter7260: filterData.filter7260, // Tambahkan filter Type 72/60
        filterPhase1: filterData.filterPhase1,
        filterPhase2: filterData.filterPhase2,
        filterPhase3: filterData.filterPhase3,

      };
  
      console.log('Query Parameters:', queryParams);
  
      const data = await fetchHouseData(queryParams);
      setHouseData(data);
  
      const updatedData = data.map((house) => ({
        ...house,
        statusText: house.status === 1 ? 'Available' : 'Sold Out',
        typeText: house.type === 1 ? '72/60' : house.type === 2 ? '76/60' : '90/72',
      }));
      setHouseData(updatedData);
    };
  
    fetchData();
  }, [filterData]);
  
  

  const handleMarkerClick = (info, x, y, houseId, statusText, typeText) => {
    console.log("Marker clicked:", info, x, y, houseId, statusText, typeText); // Tambahkan log ini
    setTooltipVisible(true);
    setHouseInfo({ id: houseId, info, statusText, typeText });
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

  const findHouseById = (houseId) => {
    return houseData.find((house) => house._id === houseId);
  };

  const replaceProgressPlaceholder = (info, houseId) => {
    const house = findHouseById(houseId);
    const progress = house ? house.progress : 0;
    return info.replace("{apiProgress}", `Progress: ${progress}%`);
  };

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
        {houseData.map((house) => (
          <div
            key={house._id}
            className={`marker ${house.status === 1 ? "available" : "sold"}`}
            style={{
              top: `${house.y * imageSize.height}px`,
              left: `${house.x * imageSize.width}px`,
              transformOrigin: "center",
            }}
            onClick={() =>
              handleMarkerClick(
                replaceProgressPlaceholder("{apiProgress}", house._id),
                house.x,
                house.y,
                house._id,
                house.statusText // Tambahkan statusText
              )
            }
          ></div>
        ))}
        {tooltipVisible && houseInfo && (
          <div
          className="tooltip"
          style={{
            top: `${tooltipPosition.y * imageSize.height + -10}px`,
            left: `${tooltipPosition.x * imageSize.width}px`,
            transform: "translate(-50%, -100%)",
            visibility: "visible",
            pointerEvents: "auto",
          }}
        >
          <p>{replaceProgressPlaceholder(houseInfo.info, houseInfo.id)}</p>
          <p>Status: {findHouseById(houseInfo.id)?.statusText}</p>
          <p>Type: {findHouseById(houseInfo.id)?.typeText}</p>

          <Link to={`/detail/${houseInfo.id}`} className="tooltip-link">
            Detail Spesifikasi
          </Link>
        </div>
        )}
      </div>
    </div>
  );
};

export default Siteplan;
