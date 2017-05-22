import React, { Component } from 'react';
import ReactDom from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import { ReactiveBase } from "@appbaseio/reactivemaps";
import {config} from './config.js'
import {Sensor} from './sensor.js'
import {Actuator} from './actuator.js'
import {Index} from './index1.js'
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
              <Route path="/" component={Index} />
          </Router>
      </ReactiveBase>
      </div>
    );
  }
}
