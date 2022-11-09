import React from "react";
import Header from "../components/Header";
import Heroes from "../components/Heroes";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
function HeroesPage({}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`/heroes`).then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <Header />
      <div className="heros_container">
        {data.map((heroes) => (
          <Heroes key={heroes.key} heroes={heroes} />
        ))}
      </div>
    </div>
  );
}

export default HeroesPage;
