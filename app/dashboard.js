import React, { Component } from 'react';
import { Router, Link, Route, browserHistory } from "react-router";
import { ReactiveBase } from "@appbaseio/reactivemaps";
import {config} from './config.js'
import {Sensor} from './sensor.js'
import {Actuator} from './actuator.js'
class Dashboard extends Component {
  render() {
  // debugger;
    return (
      <div className="row fixwindow">
         <nav>
    <div className="nav-wrapper row grey lighten-3">
      <label className="brand-logo center">React Props Example</label>
      <ul id="nav-mobile" className="left hide-on-med-and-down">

        <li><Link to={"/1"}>Example1</Link></li>
        <li><Link to={"/2"}>Example2</Link></li>
        <li><Link to={"/3"}>Example3</Link></li>

      </ul>
    </div>
  </nav>
   
    <div className="col s4">
          <Sensor />
        </div>
     
        
        <div className="col s6 abrow">
          <Actuator
            path={this.props.location.pathname}
            />
        </div>
        </div>
   
    );
  }
}

module.exports = {
Dashboard
};
