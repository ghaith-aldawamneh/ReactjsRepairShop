import React, {useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import {Fade} from "react-reveal";
import { Tabs, Tab } from "react-bootstrap";
import "./Techs.scss";
// reactstrap components
//<p><a href="#" class="btn-custom">Read more</a></p>

//<AiOutlineLaptop className="mx-1 fa-1x"/>
import {
  Container,
} from "reactstrap";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import {ImTablet} from 'react-icons/im'
import {IoPhonePortraitOutline} from 'react-icons/io5'
import {AiOutlineLaptop} from 'react-icons/ai'
import {BsSmartwatch} from 'react-icons/bs'
export default function Services() {
  const {Langsar} = useContext(StyleContext);//Langsar.intro_content
  const Demo = () => {
    return <div>Tab 4 using component screen readers</div>;
  };
  return (
    <Fade bottom duration={1000} distance="40px">
   <section class="ftco-section" id="services">
    	<div class="container-fluid ">
        <div className="greet-main">
    		<div class=" row justify-content-center pb-5 mb-3">
          <div class="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
          	<span class="subheading">{Langsar.serv_title}</span>
            
            <h2>{Langsar.serv_sub}</h2>
          </div>
        </div>
    		<div class="row">
          <div class="col-md-4 services ftco-animate fadeInUp ftco-animated">
            <div class="d-block d-flex">
              <div class="icon d-flex justify-content-center align-items-center">
            		<span class="flaticon-car-service"></span>
              </div>
              
              <div class="media-body pl-3">
                <h3 class="heading">{Langsar.serv1}</h3>
                <p>{Langsar.serv1_exp}</p>
              </div>
            </div>
            <div class="d-block d-flex">
              <div class="icon d-flex justify-content-center align-items-center">
            		<span class="flaticon-tyre"></span>
              </div>
              <div class="media-body pl-3">
                <h3 class="heading">{Langsar.serv2}</h3>
                <p>{Langsar.serv2_exp}</p>
              </div>
            </div> 

          </div>
          <div class="col-md-4 services ftco-animate fadeInUp ftco-animated">
            <div class="d-block d-flex">
              <div class="icon d-flex justify-content-center align-items-center">
            		<span class="flaticon-battery"></span>
              </div>
              <div class="media-body pl-3">
                <h3 class="heading">{Langsar.serv3}</h3>
                <p>{Langsar.serv3_exp}</p>
              </div>
            </div> 
            <div class="d-block d-flex">
              <div class="icon d-flex justify-content-center align-items-center">
            		<span class="flaticon-car-engine"></span>
              </div>
              <div class="media-body pl-3">
                <h3 class="heading">{Langsar.serv4}</h3>
                <p>{Langsar.serv4_exp}</p>
              </div>
            </div>    
          </div>

          <div class="col-md-4 services ftco-animate fadeInUp ftco-animated">
            <div class="d-block d-flex">
              <div class="icon d-flex justify-content-center align-items-center">
            		<span class="flaticon-tow-truck"></span>
              </div>
              <div class="media-body pl-3">
                <h3 class="heading">{Langsar.serv5}</h3>
                <p>{Langsar.serv5_exp}</p>
              </div>
            </div>
            <div class="d-block d-flex">
              <div class="icon d-flex justify-content-center align-items-center">
            		<span class="flaticon-repair"></span>
              </div>
              <div class="media-body pl-3">
                <h3 class="heading">{Langsar.serv6}</h3>
                <p>{Langsar.serv6_exp}</p>
              </div>
            </div>       
          </div>
        </div>
        </div>
    	</div>
    </section>
  </Fade>
  );
}
//in this stage we have to add a new tech that can adjust