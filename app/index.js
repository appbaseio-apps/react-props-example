import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import { ReactiveBase } from "@appbaseio/reactivemaps";
import {config} from './config.js'
import {LocationSensor, CitySensor, GuestSensor, TimeSensor} from './sensor.js'
import {Actuator} from './actuator.js'
import {Dashboard} from './dashboard.js'
class Main extends Component {

  render() {
    return (
			<div>
      <ReactiveBase
          app={config.credential_appbase.app}
          credentials={config.credential_appbase.credentials}
          type="meetupdata1"
      >

      <Router history={browserHistory}>
              <Route path="/react-props-example/" component={Dashboard} />
              <Route path="/react-props-example/1" component={Dashboard} />
              <Route path="/react-props-example/2" component={Dashboard} />
              <Route path="/react-props-example/3" component={Dashboard} />
              <Route path="/react-props-example/4" component={Dashboard} />
          </Router>
      </ReactiveBase>
      </div>
    );
  }
}
ReactDOM.render(<Main />,document.getElementById('app'));
