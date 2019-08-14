import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";



function App() {
  const [img, setImg] = useState(" ")
useEffect(() => {axios
.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
.then( response => setImg(response.data.hdurl))
.catch(err => console.log('err'));


},[] );

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <img src={"apod"} alt="apod"/>
    </div>
  );
}

export default App;
