import { useState, useEffect } from "react";
import styles from "./app.module.css"
import Searchbar from "./components/Searchbar";

const App = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async (city) => {
    // const city = "pune"
    const REACT_APP_OPENWEATHER_KEY = "fcd3cb6758ad79824752405fa383b2d4"
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${REACT_APP_OPENWEATHER_KEY}`;

    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
    setWeather(data)
  };

  const getCurrentWeather = async (city) => {
    // const city = "pune"
    const REACT_APP_OPENWEATHER_KEY = "fcd3cb6758ad79824752405fa383b2d4"
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_APP_OPENWEATHER_KEY}`;

    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
  };

  return (
    <div className={styles.app}>
      <div>App</div>
      <Searchbar getWeather={getWeather}/>
    </div>
  );
};

export default App;
