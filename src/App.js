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
  setImg(apod)})
.catch(err => console.log('err'));



  },[] );

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <img src={img} alt="apod"/>
    </div>
  );
}

export default App;
