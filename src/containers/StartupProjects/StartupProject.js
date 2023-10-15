

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
  const {Langsar} = useContext(StyleContext);//Langsar.intro_content
  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="prices">
        <div>
          <h1 className="skills-heading">{Langsar.discount_header}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {}
          </p>

          <div className="projects-container">
               
                <div  className={isDark? "dark-mode project-card project-card-dark": "project-card project-card-light" }>
                  <div className="project-detail">
                  <div class="text-center">
                  <h4 class="excerpt d-block font-weight-bold">{Langsar.discount1}</h4>
	            <span class="price"><h6 class="number">{Langsar.discount1_h1}</h6></span>
	            <span class="price"><h6 class="number">{Langsar.discount1_h2}</h6></span>
	            <span class="price"><h6 class="number">{Langsar.discount1_h3}</h6></span>
              </div>
	            <div class="pricing-text">
	              <p></p>
	            </div>
                  </div>
                </div>
         
                <div  className={isDark? "dark-mode project-card project-card-dark": "project-card project-card-light" }>
                  <div className="project-detail">
                  <div class="text-center">
            	<h4 class="excerpt d-block font-weight-bold">{Langsar.discount2}</h4>
	            <span class="price"><h6 class="number">{Langsar.discount2_h1}</h6></span>
	            <span class="price"><h6 class="number">{Langsar.discount2_h2}</h6></span>
	            <span class="price"><h6 class="number">{Langsar.discount2_h3}</h6></span>
              </div>
	            <div class="pricing-text">
	              <p></p>
	            </div>
                  </div>
                </div>


                <div  className={isDark? "dark-mode project-card project-card-dark": "project-card project-card-light" }>
                  <div className="project-detail">
                  <div class="text-center">
                  <h4 class="excerpt d-block font-weight-bold">{Langsar.discount3}</h4>
	            <span class="price"><h6 class="number">{Langsar.discount3_h1}</h6></span>
	            <span class="price"><h6 class="number">{Langsar.discount3_h2s}</h6></span>
	            <span class="price"><h6 class="number">{Langsar.discount3_h3}</h6></span>
              </div>
	            <div class="pricing-text">
	              <p></p>
	            </div>
                  </div>
                </div>
   

                <div  className={isDark? "dark-mode project-card project-card-dark": "project-card project-card-light" }>
                  <div className="project-detail">
                  <div class="text-center">
            	<h4 class="excerpt d-block font-weight-bold">{Langsar.discount4}</h4>
	            <span class="price"><h6 class="number">{Langsar.discount4_h1}</h6></span>
	            <span class="price"><h6 class="number">{Langsar.discount4_h2}</h6></span>
              </div>
	            <div class="pricing-text">
	              <p></p>
	            </div>
                  </div>
                </div>




          </div>
        </div>
      </div>
    </Fade>
  );
}
