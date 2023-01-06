import React, {useState} from 'react';
import './App.css';

const api ={
  key: "6e47a1214b7db5a58ef6596d02107aac",
  base:"https://home.openweathermap.org/api_keys"
}

function App() {

  const [query,setQuery] = useState('');
  const [weather,setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter")
    {
      fetch(`${api.base}weather?q=${query}&units = metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }
  
  const date=(d) =>{
    let months=["January","February","March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
    let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "", ""];

    let day = days[d.getDay()];

    let date= d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className= 'app'>
    <main>
      <div className="search-box">
        <input type="text" className="search-bar" placeholder="Search" Search/>
      </div>

  
          <div className="location-box">
            <div className="location">Banglore</div>
            <div className="date">{date(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              20°c
            </div>
            <div className="weather">Winter</div>
          </div>
    </main>
  </div>

  );
}

export default App;
