import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Services from "./CardPhotos/Services";
import Techs from "./CardPhotos/Techs";
import Prices from "./CardPhotos/Prices";
import Map_main from "./CardPhotos/Map_main";
import Contactme from "./CardPhotos/Contactme";
import Table from "./CardPhotos/Table";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./Main.scss";
import {Langsar, germany,english} from "./Langs";

const Home = () => {
 
//row justify-content-center pb-5 mb-3 
  return (
    <>          
    <Header />
    <Greeting />
    <Services/> 
    <Skills />
    <Blogs />
    <Techs />
    <StartupProject />
    <Map_main />
    <Profile />
    <Footer />
    <ScrollToTopButton />
    </>
  );
};

export default Home;
