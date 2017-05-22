import React, { Component } from 'react';
import ReactDom from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import { ReactiveBase } from "@appbaseio/reactivemaps";
import {config} from './config.js'
import {Sensor} from './sensor.js'
import {Actuator} from './actuator.js'
class Dashboard extends Component {
  render() {
    return (
      <div className="row">
         <nav>
    <div className="nav-wrapper">
      <label href="#" className="brand-logo center">Logo</label>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
        <div className="col s4">
          <Sensor />
        </div>
        <div className="col s6">
          <Actuator />
        </div>
      </div>
    );
  }
}

module.exports = {
Dashboard
};
