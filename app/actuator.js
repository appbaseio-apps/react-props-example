import React, { Component } from "react";
import CodeMirror from "react-codemirror";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
	ReactiveMap
} from "@appbaseio/reactivemaps";

const map_overlay_render = () => {
	const code = `<ReactiveMap
    componentId="ReactiveMapActuator"
    appbaseField="location"
    title="ReactiveMap"

    size={100}
    defaultZoom={13}
    defaultCenter={{ lat: 37.74, lon: -122.45 }}

    showMapStyles={true}
    defaultMapStyle="Standard"
    showMarkers={true}
    defaultMarkerImage="path/to/marker.png"
    setMarkerCluster={true}
    showSearchAsMove={true}
    setSearchAsMove={true}
    showPopoverOn="click"
    onPopoverTrigger={this.onPopoverTrigger}
    popoverTTL={3}

    stream={true}
    streamTTL={5}
    streamAutoCenter={true}
    streamMarkerImage="path/to/streaming/marker.png"

    // 'react' defines when and how the map component should update
    react={{
      and: "EventSensor"
    }}

    // map events
    onData={this.onData}
    onIdle={this.onIdle}
    onMouseover={this.onMouseover}
    onMouseout={this.onMouseout}
    onClick={this.onClick}
    onDblclick={this.onDblclick}
    onDrag={this.onDrag}
    onDragstart={this.onDragstart}
    onDragend={this.onDragend}
    onMousemove={this.onMousemove}
    onMouseout={this.onMouseout}
    onMouseover={this.onMouseover}
    onResize={this.onResize}
    onRightclick={this.onRightclick}
    onBoundsChanged={this.onBoundsChanged}
    onCenterChanged={this.onCenterChanged}
    onProjectionChanged={this.onProjectionChanged}
    onTiltChanged={this.onTiltChanged}
    onZoomChanged={this.onZoomChanged}

    // less useful props
    autoMapRender={true}
    autoCenter={true}
    autoMarkerPosition={true}
    componentStyle={{
      height: '700px';
    }}
/>
`;
	return (<div id="modalmap" className="modal">
		{close_button("modalmap")}
		<div className="modal-content">
			<h4 className="rbc-title"> ReactiveMap </h4>
			<p>A <code>ReactiveMap</code> actuator component creates a map UI widget. It is the key component for building map based experiences.</p>
			<SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
		</div>
		<div className="modal-footer">
			<a href="https://opensource.appbase.io/reactive-manual/v1.0.0/map-components/ReactiveMap.html" target="_blank" className=" modal-action modal-close waves-effect waves-green btn-flat">Learn more</a>
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
		this.setState({
			newcode: newCode,
			path: this.props.path,
			readOnly: this.state.readOnly

		});
	}

	toggleReadOnly() {
		let obj = "";
		let pretty = this.state.code;
		try {
			if (this.state.newcode != undefined) {
				obj = JSON.parse(this.state.newcode);
				pretty = JSON.stringify(obj, undefined, 4);
			}

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
		if (this.props.path == "/" || this.props.path == "/1") {
			const obj = JSON.parse("{\"and\": \"LocationSensor\"}");
			const pretty = JSON.stringify(obj, undefined, 4);
			if (this.props.path !== this.state.path) {
				this.state = ({ code: pretty, readOnly: true });
			}
		}		else if (this.props.path == "/2") {
			const obj = JSON.parse("{\"and\": \"LocationSensor\",\"not\": \"TimeSensor\"}");
			const pretty = JSON.stringify(obj, undefined, 4);
			if (this.props.path !== this.state.path) {
				this.state = ({ code: pretty, readOnly: true });
			}
		}		else if (this.props.path == "/3") {
			const obj = JSON.parse("{\"and\": [\"TimeSensor\", \"EventSensor\"],\"or\" : \"LocationSensor\"}");
			const pretty = JSON.stringify(obj, undefined, 4);
			if (this.props.path !== this.state.path) {
				this.state = ({ code: pretty, readOnly: true });
			}
		}		else if (this.props.path == "/4") {
			const tp = `{
						"or": ["GuestSensor", "TimeSensor"], "and": "LocationSensor","not": "EventSensor"}`;
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

		const tooltiptxt = `
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
								<a className="info-btn tooltip">
									<i className="fa fa-info-circle fa-1g" aria-hidden="true"></i>
									<span className="tooltiptext">
										<div>
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
									</span>
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
