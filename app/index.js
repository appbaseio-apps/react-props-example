import React, { Component } from 'react';
import ReactDom from "react-dom";
import { ReactiveBase } from "@appbaseio/reactivemaps";
import {config} from './config.js'
import {Sensor} from './sensor.js'
import {Actuator} from './actuator.js'
// import {CodeM} from './codemirror.js'
class Main extends Component {

  render() {
    return (
			<div>
      <ReactiveBase
          app={config.credential_appbase.app}
          credentials={config.credential_appbase.credentials}
          type="meetupdata1"
      >
      <div className="row">
        <div className="col s4">
          <Sensor />
        </div>
        <div className="col s6">
          <Actuator />
        </div>
      </div>
      </ReactiveBase>
			</div>
    );
  }
}
ReactDom.render((<Main />), document.getElementById('app'));
