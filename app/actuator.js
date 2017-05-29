import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import {
	ReactiveMap
} from '@appbaseio/reactivemaps';

let location_title = () => {
    return (<div className="row">
        <div className="col s8">
            <h4 className="rbc-title"> LocationSensor </h4>
        </div>
        <div className="col s4">
          <div className="col">
						  <a className="btn-floating btn-large waves-effect waves-light #2196f3 blue" href="#modal1"><i className="fa fa-code" aria-hidden="true"></i>
</a>
						<a className="waves-effect waves-light btn" href="#modal2">Modal</a>
					</div>
				</div>
				<div id="modal1" className="modal">
					<div className="modal-content">
						<h4>Modal Header</h4>
						<p>A bunch of text</p>
					</div>
					<div className="modal-footer">
						<a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
					</div>
        </div>
    </div>);
}


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

	closePopup(e){
		e.preventDefault();
		document.getElementById('info').style.display='none';
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
		}
		catch(err){
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
		if (this.props.path == '/react-props-example/' || this.props.path == '/react-props-example/1') {
			// this.updateCode(`{"and": "LocationSensor"}`)
			var obj = JSON.parse(`{"and": "LocationSensor"}`);
			// debugger;
			var pretty = JSON.stringify(obj, undefined, 4);
			if (this.props.path !== this.state.path) {
				this.state = ({ code: pretty, readOnly: true })
			}
			// debugger;
		}

		else if (this.props.path == '/react-props-example/2') {
			// this.updateCode(`{"and": "CitySensor"}`)
			let obj = JSON.parse(`{"and": "LocationSensor","not": "TimeSensor"}`);
			let pretty = JSON.stringify(obj, undefined, 4);
			if (this.props.path !== this.state.path) {
				this.state = ({ code: pretty, readOnly: true })
			}
		}

		else if (this.props.path == '/react-props-example/3') {
			// this.updateCode(`{"and": "GuestSensor"}`)
			let obj = JSON.parse(`{"and": ["GuestSensor", "CitySensor"],"or" : "LocationSensor"}`);
			let pretty = JSON.stringify(obj, undefined, 4);
			if (this.props.path !== this.state.path) {
				this.state = ({ code: pretty, readOnly: true })
			}
		}

		else if (this.props.path == '/react-props-example/4') {
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
							title="Reactive Maps"
							defaultZoom={13}
							react={JSON.parse(this.state.code)}
							componentStyle={{
								height: '450px'
							}}
							/>

					</div>
				</div>
				<div className="card thumbnail edit" key={this.state.code + "" + this.state.readOnly}>
					
					<div className="row labelclass">
    <div className="col s2">
      <label>React:</label>
    </div>
    <div className="col s2">
      <div className="col">
        <a className="info-btn" href="#info">
        <i className="fa fa-info-circle fa-1g" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    <div id="info" className="modal">
    <a className=" modal-action modal-close closebutton" onClick={this.closePopup}>
        <i className="fa fa-times-circle-o fa-1g" aria-hidden="true"></i>
        </a>
      <div className="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
      </div>
      <div className="modal-footer">
        <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
      </div>
    </div>
  </div>
					<div className="tableclass">
						<CodeMirror
							ref="editor"
							value={this.state.code}
							onChange={this.updateCode}
							options={options}
							/>
						<button className="waves-effect waves-light btn margin1" onClick={this.toggleReadOnly}>{this.state.readOnly ? 'Edit' : 'Save'}</button>
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
