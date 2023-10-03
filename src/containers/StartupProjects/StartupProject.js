

import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{"Discounts"}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
               
                <div  className={isDark? "dark-mode project-card project-card-dark": "project-card project-card-light" }>
                  <div className="project-detail">
                  <div class="text-center">
            	<h4 class="excerpt d-block font-weight-bold">First PMS</h4>
	            <span class="price"><h6 class="number">$78.98</h6></span></div>
	            <div class="pricing-text">
	              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
	            </div>
                  </div>
                </div>
         
                <div  className={isDark? "dark-mode project-card project-card-dark": "project-card project-card-light" }>
                  <div className="project-detail">
                  <div class="text-center">
            	<h4 class="excerpt d-block font-weight-bold">First PMS</h4>
	            <span class="price"><h6 class="number">$78.98</h6></span></div>
	            <div class="pricing-text">
	              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
	            </div>
                  </div>
                </div>

                <div  className={isDark? "dark-mode project-card project-card-dark": "project-card project-card-light" }>
                  <div className="project-detail">
                  <div class="text-center">
            	<h4 class="excerpt d-block font-weight-bold">First PMS</h4>
	            <span class="price"><h6 class="number">$78.98</h6></span></div>
	            <div class="pricing-text">
	              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
	            </div>
                  </div>
                </div>

                


   
          </div>
        </div>
      </div>
    </Fade>
  );
}
