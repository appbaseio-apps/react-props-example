import React, { Component } from 'react';
import ReactDom from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import { ReactiveBase } from "@appbaseio/reactivemaps";
import {config} from './config.js'
import {Sensor} from './sensor.js'
import {Actuator} from './actuator.js'
class Main extends Component {
  render() {
    return (
      <div className="row">
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
ReactDom.render(<Main />, document.getElementById('app'));
