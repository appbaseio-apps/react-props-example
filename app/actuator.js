import React, { Component } from 'react';
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

	componentWillMount(){
		// debugger;
		// if (this.props.path == '/' || this.props.path == '/1') {
		// 	// this.updateCode(`{"and": "LocationSensor"}`)
		// 	this.state = ({code: `{"and": "LocationSensor"}`})
		// }
		// else if (this.props.path == '/2') {
		// 	// this.updateCode(`{"and": "CitySensor"}`)
		// 	this.state = ({code: `{"and": "CitySensor"}`})
		// }
		// else if (this.props.path == '/3') {
		// 	// this.updateCode(`{"and": "GuestSensor"}`)
		// 	this.state = ({code: `{"and": "GuestSensor"}`})

		// }
	}
	componentDidMount(){
		// debugger;
	}

	updateCode(newCode) {
		this.setState({
			code: newCode,
			path:this.props.path
		});
	}

	render() {
		// debugger;
		if (this.props.path == '/' || this.props.path == '/1') {
			// this.updateCode(`{"and": "LocationSensor"}`)
			if( this.props.path !== this.state.path){
				this.state = ({code: `{"and": "LocationSensor"}`})
			}
		}
		else if (this.props.path == '/2') {
			// this.updateCode(`{"and": "CitySensor"}`)
			if( this.props.path !== this.state.path){
				this.state = ({code: `{"and": ["CitySensor","GuestSensor"],
										"not": "TimeSensor"}`})
			}
		}
		else if (this.props.path == '/3') {
			// this.updateCode(`{"and": "GuestSensor"}`)
			if( this.props.path !== this.state.path){
				this.state = ({code: `{"or": ["GuestSensor","CitySensor"]}`})
			}

		}

		return (
			<div>
				<div className="row">
					<div  key={this.state.code}>
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
				<div className="card thumbnail edit"  key={this.state.code}>
						<label className="labelclass">react:</label>
						<div className="tableclass">
						<Edit
							text={this.state.code}
							onUpdate={this.updateCode} 
						/>
              </div>
              </div>
              <div className="card thumbnail help">
              <div className="inner">
              <ul>
				<li><strong>react</strong> <code>Object</code><br />
				<code>react</code> prop is available in components whose data view should reactively update when on or more dependent components change their states,
				<ul>
					<li className="tabspace"><strong>key</strong> <code>String</code><br />
					<div className="tabspace">one of <code>and</code>, <code>or</code>, <code>not</code> defines the combining clause.</div>
					</li>
					<li  className="tabspace"><strong>value</strong> <code>String or Array or Object</code>
					<ul>
						<li className="tabspace2"><code>String</code> is used for specifying a single component by its <code>componentId</code>.</li>
						<li className="tabspace2"><code>Array</code> is used for specifying multiple components by their <code>componentId</code>.</li>
						<li className="tabspace2"><code>Object</code> is used for nesting other key clauses.</li>
					</ul>
					</li>
				</ul>
				</li>
				</ul>
				</div>
              </div>
              </div>
		);
	}
}

module.exports = {
	Actuator
};
