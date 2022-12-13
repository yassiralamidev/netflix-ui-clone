import React, { useEffect, useState } from "react";
import axios from "axios";
import "./row.css";

function Row({ title, url, cover }) {
  const [data, setData] = useState([]);
  const imageUrl = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      setData(request.data.results);
    }
    fetchData();
  }, [url]);
  return (
    <div className="row">
      <h2 className="rowTitle">{title}</h2>
      <div className="posters">
        {data.map((movie) => (
          <img
            className={`poster ${cover === false ? "not_cover" : null}`}
            key={movie.id}
            src={`${imageUrl}${
              cover === true ? movie.backdrop_path : movie.poster_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
