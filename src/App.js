import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import {API_KEY} from "./index"
import Description from "./Description"
import Body from "./Body"
import Header from "./Header"


function App() {

  const [nasaData, setNasaData] = useState([]);

  useEffect (() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
    .then(res =>

      setNasaData(res.data))
    
      .catch(err =>
        console.log(err))
        return () => {
          console.log('cleanup')
        }
  }, [])
console.log(nasaData)
  return (
    <div className="App">
<Header date={nasaData.date} title={nasaData.title}/>
   <Body hdurl={nasaData.hdurl}/>
<Description explanation={nasaData.explanation}/>
    </div>
  );
}
 
export default App;
