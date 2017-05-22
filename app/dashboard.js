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
    <div className="nav-wrapper row grey lighten-3">
      <label className="brand-logo center">React Props Example</label>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><a href="sass.html">Actuator1</a></li>
        <li><a href="badges.html">Actuator2</a></li>
        <li><a href="collapsible.html">Actuator3</a></li>
      </ul>
    </div>
  </nav>
      <div className="abrow">
        <div className="col s4">
          <Sensor />
        </div>
        <div className="col s6">
          <Actuator />
        </div>
        </div>
      </div>
    );
  }
}

module.exports = {
Dashboard
};
