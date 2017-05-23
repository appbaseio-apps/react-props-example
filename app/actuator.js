import React, { Component } from 'react';
import ReactDom from 'react-dom';
import CodeMirror from 'react-codemirror';
import {
	ReactiveMap
} from '@appbaseio/reactivemaps';
import {Edit} from './edit';

class Actuator extends Component {

	constructor(props) {
		super(props);
		this.updateCode = this.updateCode.bind(this);
		// if(props.path == '/' || props.path =='/1'){
		this.state = ({ code: `{"and": "TimeSensor"}` })
		// }
		// else if(props.path == '/2'){
		// 			this.state = ({code: `{"and": "CitySensor"}`})
		// }
		// else if(props.path == '/3'){
		// 			this.state = ({code: `{"and": "GuestSensor"}`})
		// }
	}

	updateCode(newCode) {
		this.setState({
			code: newCode
		});
	}

	render() {
		var self =this;
		// if (this.props.path == '/' || this.props.path == '/1') {
		// 	this.updateCode(`{"and": "LocationSensor"}`)
		// 	// this.state = ({code: `{"and": "LocationSensor"}`})
		// }
		// else if (this.props.path == '/2') {
		// 	this.updateCode(`{"and": "CitySensor"}`)
		// 	// this.state = ({code: `{"and": "CitySensor"}`})
		// }
		// else if (this.props.path == '/3') {
		// 	this.updateCode(`{"and": "GuestSensor"}`)
		// 	// this.state = ({code: `{"and": "GuestSensor"}`})
		// }

		return (
			<div key={this.state.code}>
				<div className="row">
					<div>
						<ReactiveMap
							appbaseField="location"
							setMarkerCluster={false}
							defaultMapStyle="Blue Water"
							popoverTTL={3}
							autoCenter={true}
							size={1000}
							showSearchAsMove={true}
							showMapStyles={true}
							title="ReactiveMaps"
							defaultZoom={13}
							react={JSON.parse(this.state.code)}
							componentStyle={{
								height: '450px'
							}}
							/>

					</div>
				</div>
				<div className="card thumbnail">
					<div>
						<label className="labelclass">react:</label>

						{/*}  <CodeMirror
              value={this.state.code}
              onChange={this.updateCode}
              />  */}
					</div>
					<Note
							text={self.state.code}
							onUpdate={self.updateCode} />
				</div>
			</div>
		);
	}
}

module.exports = { Actuator };
