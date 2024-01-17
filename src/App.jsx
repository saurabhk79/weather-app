import { useState, useEffect } from "react";

import styles from "./app.module.css";
import Searchbar from "./components/Searchbar";
import Carousel from "./components/Carousel";

import { HashLoader } from "react-spinners";

const App = () => {
  const [weather, setWeather] = useState({});
  const [currentWeather, setCurrenWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timeout;
    setLoading(true);
    getWeather();

    timeout = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const getWeather = async (city = "pune") => {
    // const city = "pune"
    const REACT_APP_OPENWEATHER_KEY = "fcd3cb6758ad79824752405fa383b2d4";
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${REACT_APP_OPENWEATHER_KEY}`;

    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
    setWeather(data);

    setCurrenWeather(data.list[0]);
  };

  // const getCurrentWeather = async (city) => {
  //   // const city = "pune"
  //   const REACT_APP_OPENWEATHER_KEY = "fcd3cb6758ad79824752405fa383b2d4"
  //   const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_APP_OPENWEATHER_KEY}`;

  //   const res = await fetch(url);
  //   const data = await res.json();

  //   console.log(data);
  // };

  return (
    <>
      {loading ? (
        <div><HashLoader /></div>
      ) : (
        <div className={styles.app}>
          <Searchbar getWeather={getWeather} />
          <Carousel data={weather.list} />
        </div>
      )}
    </>
  );
};

export default App;
