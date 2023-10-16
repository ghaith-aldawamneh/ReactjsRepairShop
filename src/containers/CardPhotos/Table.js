import React from "react";
import {Fade} from "react-reveal";
import { Tabs, Tab } from "react-bootstrap";
import "./Table.scss";
import Select from 'react-select';
// reactstrap components
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

const Countries = [
  { label: "Albaniasss", value: 355 },
  { label: "Argentinass", value: 54 },
  { label: "Austriass", value: 43 },
  { label: "Cocos Islandsss", value: 61 },
  { label: "Kuwait", value: 965 },
  { label: "Sweden", value: 46 },
  { label: "Venezuela", value: 58 }
];


export default function Services() {
  const Demo = () => {
    return <div>Tab 4 using component screen readers</div>;
  };
  return (
    <Fade bottom duration={1000} distance="40px">
          <div className="container-fluid greet-main1" id="table">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Invoices</h3>
                  </div>
                  <div className="table-responsive">
                    <table className="table card-table table-vcenter text-nowrap">
                      <thead>
                        <tr>
                          <th className="w-1">No.</th>
                          <th>Invoice Subject</th>
                          <th>Client</th>
                          <th>VAT No.</th>
                          <th>Created</th>
                          <th>Status</th>
                          <th className="row justify-content-center align-items-center">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><span className="text-muted">001401</span></td>
                          <td><a href="invoice.html" className="text-inherit">Design Works</a></td>
                          <td>
                            Carlson Limited
                          </td>
                          <td>
                            87956621
                          </td>
                          <td>
                            15 Dec 2017
                          </td>
                          <td>
                            <span className="status-icon bg-success"></span> Paid
                          </td>
                          <td>
                            <div className="container-fluid">
        <div className=" row justify-content-center align-items-center ">
          <div className="dropdown">
            <Select options={Countries} />
          </div>
          <div className="col-md-4"></div>
        </div></div>
      </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  </div>
                </div>
  </Fade>
  );
}
//in this stage we have to add a new tech that can adjust