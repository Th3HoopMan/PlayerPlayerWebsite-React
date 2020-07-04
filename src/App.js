import React from 'react';

import './App.css';

import Hero from './Hero/Hero';
import Overview from './Overview/Overview';
import AboutUs from './AboutUs/AboutUs';
import ContactUs from './ContactUs/ContactUs';
import Donations from './Donations/Donations';
import ContentPitch from './ContentPitch/ContentPitch';
import Footer from './Footer/Footer';



const welcomeHeader = "Welcome to the Player Player Podcast!";
const showDescriptionHeader = "Gather ‘Round the Virtual Watercooler";

function App() {
  return (
    <div className="App">
      <Hero/>
      <Overview/>
      <ContentPitch/>
      <ContactUs/>
      <AboutUs/>
      <Donations/>
      <Footer/>
    </div>
  );
}

export default App;
