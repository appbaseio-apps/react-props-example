import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import {
	ReactiveMap
} from '@appbaseio/reactivemaps';
import { Edit } from './edit';

class Actuator extends Component {

	constructor(props) {
		super(props);
		this.updateCode = this.updateCode.bind(this);
		// if(props.path == '/' || props.path =='/1'){
		this.state = ({ code: `{"and": "TimeSensor"}` })
	}

	updateCode(newCode) {
		this.setState({
			code: newCode,
			path: this.props.path
		});
	}

	render() {
		// debugger;
		let init_react = null;
		if (this.props.path == '/' || this.props.path == '/1') {
			if (this.props.path !== this.state.path) {
				init_react = ({ code: `{"and": "LocationSensor"}` });
			}
		}

		else if (this.props.path == '/2') {
			if (this.props.path !== this.state.path) {
				init_react = ({
					code: `{"and": "LocationSensor",
							"not": "TimeSensor"}`});
			}
		}

		else if (this.props.path == '/3') {
			if (this.props.path !== this.state.path) {
				init_react = ({
					code: `{"and": ["GuestSensor", "CitySensor"],
				            "or" : "LocationSensor"}`});
			}
		}

		else if (this.props.path == '/4') {
			if (this.props.path !== this.state.path) {
				init_react = ({
					code: `{"and": {
                                "or": ["GuestSensor", "TimeSensor", "LocationSensor"],
                                "not": "CitySensor"
                            }}`});
			}
		}

		this.state = init_react;

		return (
			<div>
				<div className="row">
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
							title="ReactiveMaps"
							defaultZoom={13}
							react={JSON.parse(this.state.code)}
							componentStyle={{
								height: '450px'
							}}
							/>

					</div>
				</div>
				<div className="card thumbnail edit" key={this.state.code}>
					<label className="labelclass">react:</label>
					<div className="tableclass">
						<Edit
							text={this.state.code}
							onUpdate={this.updateCode}
							/>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = {
	Actuator
};
