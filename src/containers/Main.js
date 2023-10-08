import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Services from "./CardPhotos/Services";
import Techs from "./CardPhotos/Techs";
import Prices from "./CardPhotos/Prices";
import Map from "./CardPhotos/Map";
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
import "./Main.scss";
import {Langsar, germany,english} from "./Langs";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [Germ, setIsGerm] = useLocalStorage("Germ", false);
  const [Langsarray, setLangs] = useLocalStorage("Langsar", germany);



  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsGerm(!Germ);
    if(Germ==true){setLangs(germany)
    console.log("Langsarray42",Langsarray)
    }
    else{setLangs(english)}
  };
//row justify-content-center pb-5 mb-3
  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme, Langsar: Langsarray}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting />
            <Services/> 
            <Skills />
            <Blogs />
            
            <Techs />
            <Table />
            <WorkExperience />
            <Talks />
            <StackProgress />
            <Projects />
            <Education />
            <StartupProject />
            <Map />
            <Contactme />
            <Profile />
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
