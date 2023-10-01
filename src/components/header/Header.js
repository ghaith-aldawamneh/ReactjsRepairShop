import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {FaLocationArrow} from 'react-icons/fa'
import {FaLocationCrosshairs} from 'react-icons/fa6'
import {FiPhoneCall} from 'react-icons/fi'
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;

  return (
    <Headroom>
      <div  className={isDark ? "d-flex dark-menu header rounded-lg" : "d-flex header rounded-lg"}>
     
      <a href="/" className=" d-none logo col-1 d-md-flex justify-content-center align-items-center ">
          <span className="ml-3 logo-name col-12">          <img  style={{ width:  '100px' }}
                            alt="man sitting on table"
                            src={require("../../assets/images/logo.png")}
                          ></img></span>
        </a>
      <div className="col-11">  
      <div class="wrap">
	    <div class="container">
				<div class="row justify-content-between">
					<div class="">
						<div class="row">
							<div class="col">
								<div class=" d-flex">
									<div class="icon d-flex align-items-center justify-content-center"><span className="mx-2 rounded-circle border border-warning"><FaLocationCrosshairs className="m-2 m-md-3 fa-1x "/></span></div>
									<div class="text">721 New York NY 10016</div>
								</div>
							</div>
							<div class="col">
								<div class="top-wrap d-flex">
                <div class="icon d-flex align-items-center justify-content-center"><span className="mx-2 rounded-circle border border-warning"><FiPhoneCall className="m-2 m-md-3 fa-1x "/></span></div>

									<div class="text"><span></span><span>(+01) 123 456 7890</span></div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
      <header className={isDark ? "dark-menu header rounded-lg" : "header rounded-lg"} >
       
      <a href="/" className="d-md-none logo col-1 d-flex justify-content-center align-items-center ">
          <span className="ml-3 logo-name col-12">          <img  style={{ width:  '100px' }}
                            alt="man sitting on table"
                            src={require("../../assets/images/logo.png")}
                          ></img></span>
        </a>

        
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
      </div>
      </div>
    </Headroom>
  );
}
export default Header;