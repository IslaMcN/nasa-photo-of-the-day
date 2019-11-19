import React from "react";
import App from "./App.js";
import {useEffect, useState} from 'react';
import Carousel from "bootstrap";
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div``;
const Title = styled.h2``;
const Ordered = styled.ol``;

const PreviousImg = props => {
    const [img, setImg] = useState()

   
    useEffect(() => {
        axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5')
      .then( response => 
        {const apod = response.data.url;
        setImg(apod);
        })
      .catch(err => console.log('err'));
      
      
      
        },[] );
      
        return (
        <Container>
        <Title>Past APODs</Title>
        <Carousel id = "myCarousel">
        <Ordered>
          <li data-target="#myCarousel" data-slide-to = "0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
          <li data-target="#myCarousel" data-slide-to="4"></li>
        </Ordered>
      <div className ="carousel-inner">
        <div class="item active">
          <img src = {img} alt ="random apod" />
          
        </div>
        <div class="item">
        <img src = {img} alt ="random apod" />
        </div>
        <div class="item">
        <img src = {img} alt ="random apod" />
        
        </div>
        <div class="item">
        <img src = {img} alt ="random apod" />
        </div>
        <div class="item">
        <img src = {img} alt ="random apod" />
        </div>
      </div>
      <a class= "left carousel-control" href="#myCarousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class= "right carousel-control" href="#myCarousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
        <span class="sr-only">Next</span>
      </a>
      </Carousel>
      </Container>
    )
    
}


export default PreviousImg;