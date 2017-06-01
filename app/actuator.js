import React, { Component } from "react";
import CodeMirror from "react-codemirror";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
	ReactiveMap
} from "@appbaseio/reactivemaps";

const map_overlay_render = () => {
	const code = `<ReactiveMap
	appbaseField="location"
	setMarkerCluster={false}
	defaultMapStyle="Blue Water"
	popoverTTL={3}
	autoCenter={true}
	size={1000}
	showSearchAsMove={true}
	showMapStyles={true}
	title={<div>Buraah!</div>}
	defaultZoom={13}
	react={JSON.parse(this.state.code)}
	componentStyle={{
		height: "450px"
	}}
/>`;
	return (<div id="modalmap" className="modal">
		{close_button("modalmap")}
		<div className="modal-content">
			<h4 className="rbc-title"> ReactiveMap </h4>
			<p >A <code>DateRange</code> sensor component creates a calendar view based UI widget. It is used for filtering results by a date like property.</p>
			<SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
		</div>
		<div className="modal-footer">
			<a href="https://opensource.appbase.io/reactive-manual/v1.0.0/components/DateRange.html" target="_blank" className=" modal-action modal-close waves-effect waves-green btn-flat">Learn more</a>
		</div>
	</div>);
};

let close_button = id => (
	<a className="closebutton modal-action modal-close" onClick={() => { document.getElementById(id).style.display = "none"; }}>
		<i className="fa fa-times-circle-o fa-1g" aria-hidden="true" />
	</a>
  );

const map_title = () => (<div className="row">
	<div className="col s10">
		<h4 className="rbc-title maps-title"> ReactiveMap </h4>
	</div>
	<div className="col s2">
		<div className="col">
			<a className="btn-floating btn waves-effect waves-light #fafafa grey lighten-6 maps-button" href="#modalmap">
				<i className="fa fa-code" aria-hidden="true" />
			</a>
		</div>
	</div>
  </div>);


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
		};
	}

	closePopup(e) {
		e.preventDefault();
		document.getElementById("info").style.display = "none";
	}

	updateCode(newCode) {
		// debugger;
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
		try {
			if (this.state.newcode != undefined) {
				obj = JSON.parse(this.state.newcode);
				pretty = JSON.stringify(obj, undefined, 4);
			}

			// debugger;
			this.setState({
				code: pretty,
				readOnly: !this.state.readOnly,
				path: this.props.path,
				error: ""
			}, () => this.refs.editor.focus());
		}		catch (err) {
			this.setState({
				code: this.state.code,
				readOnly: this.state.readOnly,
				path: this.props.path,
				error: err.message
			}, () => this.refs.editor.focus());
		}
	}

	render() {
		// debugger;
		if (this.props.path == "/" || this.props.path == "/1") {
			// this.updateCode(`{"and": "LocationSensor"}`)
			const obj = JSON.parse("{\"and\": \"LocationSensor\"}");
			// debugger;
			const pretty = JSON.stringify(obj, undefined, 4);
			if (this.props.path !== this.state.path) {
				this.state = ({ code: pretty, readOnly: true });
			}
			// debugger;
		}		else if (this.props.path == "/2") {
			// this.updateCode(`{"and": "CitySensor"}`)
			const obj = JSON.parse("{\"and\": \"LocationSensor\",\"not\": \"TimeSensor\"}");
			const pretty = JSON.stringify(obj, undefined, 4);
			if (this.props.path !== this.state.path) {
				this.state = ({ code: pretty, readOnly: true });
			}
		}		else if (this.props.path == "/3") {
			// this.updateCode(`{"and": "GuestSensor"}`)
			const obj = JSON.parse("{\"and\": [\"GuestSensor\", \"CitySensor\"],\"or\" : \"LocationSensor\"}");
			const pretty = JSON.stringify(obj, undefined, 4);
			if (this.props.path !== this.state.path) {
				this.state = ({ code: pretty, readOnly: true });
			}
		}		else if (this.props.path == "/4") {
			const tp = `{
						"or": ["GuestSensor", "TimeSensor"], "and": "LocationSensor","not": "CitySensor"}`;
			const obj = JSON.parse(tp);
			const pretty = JSON.stringify(obj, undefined, 4);
			if (this.props.path !== this.state.path) {
				this.state = ({ code: pretty, readOnly: true });
			}
		}
		const options = {
			lineNumbers: false,
			readOnly: this.state.readOnly,
			mode: "javascript"
		};

		const tooltiptxt = `<div class="lowpadding">
			<h6><b>react:</b> <i>Object</i></h6>
			<p><b>key:</b> <i>String </i><br />
			&nbsp;&nbsp;&nbsp;&nbsp;Any of the three conjuction clause "and", "or" or "not".</p>
			<p><b>value:</b> <i>String</i> or <i>Arary</i> or <i>Object</i><br />
			<table>
			<tr><td>String:</td><td>specify a single component by its componentId.<br /></td></tr>
			<tr><td>Array:</td><td>specify multiple components by their componentId.<br /></td></tr>
			<tr><td>Object</td><td>nesting other key clauses.<br /></td></tr>
			</table>
			</p>
		</div>
		`;

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
							title={map_title()}
							defaultZoom={13}
							react={JSON.parse(this.state.code)}
							componentStyle={{
								height: "450px"
							}}
						/>
						{map_overlay_render()}
					</div>
				</div>
				<div className="card thumbnail edit" key={`${this.state.code}${this.state.readOnly}`}>

					<div className="row labelclass">
						<div className="col s2">
							<label>React:</label>
						</div>
						<div className="col s2">
							<div className="col">
								<a className="info-btn tooltipped" data-position="right" data-delay="50" data-tooltip={tooltiptxt}>
									<i className="fa fa-info-circle fa-1g" aria-hidden="true" />
								</a>
							</div>
						</div>
					</div>
					<div className="tableclass">
						<CodeMirror
							ref="editor"
							defaultValue={this.state.code}
							onChange={this.updateCode}
							options={options}
							autoSave={true}
						/>
						<button className="waves-effect waves-light btn margin1" onClick={this.toggleReadOnly}>{this.state.readOnly ? "Edit" : "Save"}</button>
						<label className="error">{this.state.error}</label>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = {
	Actuator
};
