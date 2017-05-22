import React, { Component } from 'react';
import ReactDom from "react-dom";
import { Router, Link, Route, browserHistory } from "react-router";
import { ReactiveBase } from "@appbaseio/reactivemaps";
import {config} from './config.js'
import {Sensor} from './sensor.js'
import {Actuator} from './actuator.js'
class Dashboard extends Component {
  render() {
  // debugger;
    return (
      <div className="row">
         <nav>
    <div className="nav-wrapper row grey lighten-3">
      <label className="brand-logo center">React Props Example</label>
      <ul id="nav-mobile" className="left hide-on-med-and-down">

        <li><Link to={"/react-props-example/1"}>Example1</Link></li>
        <li><Link to={"/react-props-example/2"}>Example2</Link></li>
        <li><Link to={"/react-props-example/3"}>Example3</Link></li>

      </ul>
    </div>
  </nav>
      <div className="abrow">
        <div className="col s4">
          <Sensor />
        </div>
        <div className="col s6">
          <Actuator
            path={this.props.location.pathname}
            />
        </div>
        </div>
      </div>
    );
  }
}

module.exports = {
Dashboard
};
