import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";



function App() {
  const [img, setImg] = useState()
  const [title, setTitle] = useState()
  const [info, setInfo] = useState()
  const [date, setDate] = useState()

useEffect(() => {
  axios
.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
.then( response => 
  {const apod = response.data.url;
  setImg(apod);
  const header = response.data.title;
  setTitle(header);
  const paragraph = response.data.explanation;
  setInfo(paragraph);
  const day = response.data.date;
  setDate(day)})
.catch(err => console.log('err'));



  },[] );

  return (
    <div className="App">
      <header className="App-header">
        <h1>{title}</h1>
       <h2>{date}</h2>
      </header>
      <img className="img" src={img} alt="apod"/>
      <p>{info}</p>
      
    </div>
  );
}

export default App;
