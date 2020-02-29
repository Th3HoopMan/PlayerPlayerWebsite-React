import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './Hero/Hero';
import Detail from './Detail/Detail';
import InfoCard from './InfoCard/InfoCard';
import ContactForm from './ContactForm/ContactForm';

const welcomeHeader = "Welcome to the Player Player Podcast!";
const showDescriptionHeader = "Gather ‘Round the Virtual Watercooler";

function App() {
  return (
    <div className="App">
      <Hero/>
      <Detail header="Welcome to the Player Player Podcast!">
          The Player Player Podcast offers candid, casual, and often wacky conversations 
          about video games and the culture surrounding them. Two best friends on opposite 
          ends of the U.S. hop on Discord every week to break down a handful of gaming themed 
          topics.
      </Detail>
      <Detail header="Gather ‘Round the Virtual Watercooler">
          One episode they’re breaking down their unique experiences with Sekiro, the next they’re 
          debating whether or not the the Sonic franchise should be cancelled. Join them on their 
          crusade to create a show that captures the euphoria of gaming through a mix of passionate 
          opinions and comedy.
      </Detail>
      <InfoCard
        name="Joseph Hooper"
        city="Seattle, WA"
        social="Th3Hoopman"
        game="God of War (PS4)"
      >
        Joseph is a full-time software developer that’s been playing games for as long as he can 
        remember. While he likes to partake in dozens of hobbies including listening to a broad 
        range of music, exploring Seattle food spots, and collecting sneakers, at the end of the 
        day gaming will always have his heart. He’s been following the gaming industry since early 
        highschool and will look for any opportunity to talk your ear off about all the latest 
        gaming gossip.
      </InfoCard>
      <InfoCard
        name="Arsene Lakpa"
        city="Atlanta, GA"
        social="LeekyLeek13"
        game="Binding of Issac"
      >
        Arsene is a full-time software developer that somehow finds time to play games regardless 
        of what’s going on in his life. Being a man of the people, Arsene seeks out unique and 
        often overlooked indie games to play, just as often as he picks up the latest AAA releases. 
        It would be a disservice to his character to not mention that he fears no bullet-hell and has 
        beaten Cuphead and (almost) Sekiro without batting an eye. 
      </InfoCard>
      <ContactForm/>
    </div>
  );
}

export default App;
