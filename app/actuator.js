import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import {
	ReactiveMap
} from '@appbaseio/reactivemaps';

class Actuator extends Component {

	constructor(props) {
		super(props);
		this.updateCode = this.updateCode.bind(this);
		this.toggleReadOnly = this.toggleReadOnly.bind(this);
		// if(props.path == '/' || props.path =='/1'){
		this.state = {
			code: null,
			newcode: null,
			readOnly: true
		}
	}

	updateCode(newCode) {
		this.setState({
			newcode: newCode,
			path: this.props.path,
			readOnly: this.state.readOnly

		});
	}

	toggleReadOnly() {
		// debugger;
		let obj = "";
		let pretty = this.state.code;
		if (this.state.newcode != undefined) {
			obj = JSON.parse(this.state.newcode);
			pretty = JSON.stringify(obj, undefined, 4);
		}

		// debugger;
		this.setState({
			code: pretty,
			readOnly: !this.state.readOnly,
			path: this.props.path
		}, () => this.refs.editor.focus());
	}

	overlay() {

		$(document).ready(function () {
			// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
			$('.modal').modal();
		});
	}

	render() {
		// debugger;
		if (this.props.path == '/' || this.props.path == '/1') {
			// this.updateCode(`{"and": "LocationSensor"}`)
			var obj = JSON.parse(`{"and": "LocationSensor"}`);
			// debugger;
			var pretty = JSON.stringify(obj, undefined, 4);
			if (this.props.path !== this.state.path) {
				this.state = ({ code: pretty, readOnly: true })
			}
			// debugger;
		}

		else if (this.props.path == '/2') {
			// this.updateCode(`{"and": "CitySensor"}`)
			let obj = JSON.parse(`{"and": "LocationSensor","not": "TimeSensor"}`);
			let pretty = JSON.stringify(obj, undefined, 4);
			if (this.props.path !== this.state.path) {
				this.state = ({ code: pretty, readOnly: true })
			}
		}

		else if (this.props.path == '/3') {
			// this.updateCode(`{"and": "GuestSensor"}`)
			let obj = JSON.parse(`{"and": ["GuestSensor", "CitySensor"],"or" : "LocationSensor"}`);
			let pretty = JSON.stringify(obj, undefined, 4);
			if (this.props.path !== this.state.path) {
				this.state = ({ code: pretty, readOnly: true })
			}
		}

		else if (this.props.path == '/4') {
			let tp = `{
						"or": ["GuestSensor", "TimeSensor"], "and": "LocationSensor","not": "CitySensor"}`;
			let obj = JSON.parse(tp);
			console.log(obj)
			let pretty = JSON.stringify(obj, undefined, 4);
			if (this.props.path !== this.state.path) {
				this.state = ({ code: pretty, readOnly: true })
			}

		}
		let options = {
			lineNumbers: false,
			readOnly: this.state.readOnly,
			mode: "javascript"
		};

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
				<div className="card thumbnail edit" key={this.state.code + "" + this.state.readOnly}>
					<label className="labelclass">react:</label>
					<div className="tableclass">
						<CodeMirror
							ref="editor"
							value={this.state.code}
							onChange={this.updateCode}
							options={options}
							/>
						<button className="waves-effect waves-light btn margin1" onClick={this.toggleReadOnly}>{this.state.readOnly ? 'Edit' : 'Save'}</button>

					</div>
				</div>
				<div className="row section">
					<div className="col">

						<a className="waves-effect waves-light btn modal-trigger" href="#m" onClick={this.overlay}>Modal</a>
					</div>
				</div>

				<div id="#m" className="modal">
					<div className="modal-content">
						<h4>Modal Header</h4>
						<p>A bunch of text</p>
					</div>
					<div className="modal-footer">
						<a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = {
	Actuator
};
