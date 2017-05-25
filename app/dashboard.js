import React, { Component } from 'react';
import { Router, Link, Route, browserHistory } from "react-router";
import { ReactiveBase } from "@appbaseio/reactivemaps";
import { config } from './config.js'
import { LocationSensor, CitySensor, GuestSensor, TimeSensor } from './sensor.js'
import { Actuator } from './actuator.js'
class Dashboard extends Component {
  render() {
    let path = this.props.location.pathname;
    let sensor = null;
    if (path == '/' || path == '/1') {
      sensor = <div>
        <LocationSensor />
        <button>
        <i className="fa fa-code" aria-hidden="true"></i>
        </button>
      </div>
    }
    else if (path == '/2') {
      sensor = <div>
        <LocationSensor />
        <TimeSensor />
      </div>
    }
    else if (path == '/3') {
      sensor = <div>
        <LocationSensor />
        <TimeSensor />
        <CitySensor />
      </div>
    }
    else if (path == '/4') {
      sensor = <div>
        <LocationSensor />
        <TimeSensor />
        <CitySensor />
        <GuestSensor />
      </div>
    }
    return (
      <div className="row fixwindow">
        <nav>
          <div className="nav-wrapper row grey lighten-3">
            <label className="brand-logo center">React Props Example</label>
            <ul id="nav-mobile" className="left hide-on-med-and-down">

              <li><Link to={"/1"}>Example1</Link></li>
              <li><Link to={"/2"}>Example2</Link></li>
              <li><Link to={"/3"}>Example3</Link></li>
              <li><Link to={"/4"}>Example4</Link></li>

            </ul>
          </div>
        </nav>
        <div className="col s4">
          {sensor}
        </div>

        <div className="col s6 abrow">
          <Actuator
            path={path}
            />
        </div>
      </div>
    );
  }
}

module.exports = {
  Dashboard
};
