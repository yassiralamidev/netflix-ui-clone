import React, { useEffect, useState } from "react";
import "./banner.css";
import axios from "axios";

function Banner({ url }) {
  const [data, setData] = useState([]);
  const imageUrl = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fecthData() {
      const request = await axios.get(url);
      setData(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fecthData();
  }, []);
  // console.log(data);

  const truncate=(str,n)=>{
    return str?.length > n  ? str.substr(0,n-1) + "..." : str;
  }

  const bannerStyle = {
    backgroundSize: "cover",
    backgroundImage: `url("${imageUrl}${data?.backdrop_path}")`,
    backgroundPosition: "center center",
    color:"white",
    obejectFit : "contain",
    height:"440px"
  };
  return (
    <div className="banner" style={bannerStyle}>
      <div className="content">
        <h1 className="title">{data?.name || data?.original_name || data?.title}</h1>
        <div className="buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h2 className="desc">
          {truncate(data?.overview,150)}
        </h2>
      </div>
      <div className="fadeBottom"></div>
    </div>
  );
}

export default Banner;
