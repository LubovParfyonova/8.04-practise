import './App.css';
import React from 'react'

import ImageWrapper from './components/ImageWrapper/imdex';

function App() {


  return (
    <ImageWrapper 
    width='300px' 
    height='150px'
    title='hello'
    tabIndex='2'
    >
      <img 
      width='100%'
      alt='We are go'
      src='https://www.volynpost.com/img/modules/news/5/e7/78709318b05b9c2fb9660ea269922e75/rss-photo.jpg'/>
    </ImageWrapper>
  );
}

export default App;