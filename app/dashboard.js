import React, { Component } from 'react';
import { Router, Link, Route, browserHistory } from "react-router";
import { ReactiveBase } from "@appbaseio/reactivemaps";
import { config } from './config.js'
import { LocationSensor, CitySensor, GuestSensor, TimeSensor } from './sensor.js'
import { Actuator } from './actuator.js'

let close_button = (id) => {
  return (
    <a className="closebutton modal-action modal-close" onClick={() => { document.getElementById(id).style.display = 'none'; } }>
      <i className="fa fa-times-circle-o fa-1g" aria-hidden="true"></i>
    </a>
  );
}

class Dashboard extends Component {
  render() {
    let path = this.props.location.pathname;
    let sensor = null;
    if (path == '/' || path == '/1') {
      sensor = <div>
        <LocationSensor />
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
            <a id="onstart" className="intro" href="#modal6"> New to react props? </a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">

              <li><Link to={"/1"}>Example1</Link></li>
              <li><Link to={"/2"}>Example2</Link></li>
              <li><Link to={"/3"}>Example3</Link></li>
              <li><Link to={"/4"}>Example4</Link></li>

            </ul>
          </div>
        </nav>
        <div>
          <div id="modal6" className="modal">
            {close_button("modal6")}
            <div className="modal-content">
              <h4 className="rbc-title"> New to react props? </h4>
              <p><code>react</code> prop is available in components whose data view should reactively update when on or more dependent components change their states, e.g. <code>ReactiveMap</code>,  <code>ReactiveList</code>.</p>
            </div>
            <div className="modal-footer">
              <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/map-components/GeoDistanceDropdown.html" target="_blank" className=" modal-action modal-close waves-effect waves-green btn-flat">Learn more</a>
            </div>
          </div>
        </div >
        <div className="col s4">
          {sensor}
        </div>

        <div className="col s7 abrow">
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
