import React, { Component } from 'react';
import ReactDom from 'react-dom';
import CodeMirror from 'react-codemirror';
import {
	ReactiveMap
} from '@appbaseio/reactivemaps';

class Actuator extends Component {

	constructor(props) {
		super(props);
    this.updateCode = this.updateCode.bind(this);
    this.state = ({code: `{"and": "TimeSensor"}`})
	}

  updateCode(newCode) {
    this.setState({
      code: newCode
    });
  }

	render() {
		// debugger;
    
		return (
			<div>
			<div className="row grey lighten-3">
			
						<div key={this.state.code}>
							<ReactiveMap
								appbaseField="location"
								setMarkerCluster={false}
								defaultMapStyle="Blue Water"
								popoverTTL={3}
								autoCenter={true}
								size={1000}
								showSearchAsMove={true}
								showMapStyles={true}
								title="Reactive Maps"
								defaultZoom={13}
								react={JSON.parse(this.state.code)}
								componentStyle={{
									height: '450px'
								}}
								/>

						</div>
            </div>
            <div className="card thumbnail">
            <h5 className="rbc-title col s12 col-xs-12">Custom React Prop</h5>
            <div>
            	<label className="labelclass">react:</label>

            <CodeMirror
              value={this.state.code}
              onChange={this.updateCode}
              />
              </div>
              </div>
			</div>
		);
	}
}

module.exports = {Actuator};
