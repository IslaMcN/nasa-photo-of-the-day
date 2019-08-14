import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";



function App(props) {
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
  setInfo(paragraph);})
.catch(err => console.log('err'));



  },[] );

  return (
    <div className="App">
      <header>
       Title: {title}
      </header>
      <p>{info}</p>
      <img src={img} alt="apod"/>
    </div>
  );
}

export default App;
