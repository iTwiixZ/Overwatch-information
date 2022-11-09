import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Maps() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`/gamemodes`).then((res) => setData(res.data));
  }, []);
  return (
    <div className="gamemode">
      {data.map((gamemode) => (
        <div key={gamemode.name} className="gamemode_type">
          <div className="screenshot">
            <img
              className="image_gamemode"
              src={gamemode.screenshot}
              alt={gamemode.name}
            />
          </div>
          <div className="details">
            <h1>{gamemode.name}</h1>
            <img className="icon" src={gamemode.icon} alt={gamemode.name} />
          </div>
          <p className="gamemode_description">{gamemode.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Maps;
