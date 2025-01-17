import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import { Grid, Form, Input, TextArea, Button, Select } from "semantic-ui-react";
import styled from 'styled-components';
import PreviousImg from './carousel.js';

const StyledContainer =styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  `;
const StyledDiv = styled.div`
  padding: 2%;
  `;
const StyledP = styled.p`
  margin-top: 100%;
  margin-bottom: 25%;
  filter: invert(1) grayscale(1) contrast(9);`;
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  position:fixed;
  z-index: -1;`;
const Styledheading = styled.h1`
filter: invert(1) grayscale(1) contrast(9);`;
const StyledDate = styled.h2`
filter: invert(1) grayscale(1) contrast(9);`;





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
    
    <StyledContainer>
      <StyledImg src={img} alt="apod"/>

      <StyledDiv>
      <header>
        <Styledheading>{title}</Styledheading>
       <StyledDate>{date}</StyledDate>
      </header>
      
      <StyledP>{info}</StyledP>
      </StyledDiv>
      
    </StyledContainer>
  );
}

export default App;
