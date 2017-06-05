import React, { Component } from "react";
import { Link } from "react-router";
import { LocationSensor, EventSensor, GuestSensor, TimeSensor } from "./sensor";
import { Actuator } from "./actuator";

const close_button = id => (
	<a className="closebutton modal-action modal-close" onClick={() => { document.getElementById(id).style.display = "none"; }}>
		<i className="fa fa-times-circle-o fa-1g" aria-hidden="true" />
	</a>
  );

class Dashboard extends Component {
	render() {
		const path = this.props.location.pathname;
		let sensor = null;
		if (path == "/" || path == "/1") {
			sensor = (<div>
				<LocationSensor />
			</div>);
		} else if (path == "/2") {
			sensor = (<div>
				<LocationSensor />
				<TimeSensor />
			</div>);
		} else if (path == "/3") {
			sensor = (<div>
				<LocationSensor />
				<TimeSensor />
				<EventSensor />
			</div>);
		} else if (path == "/4") {
			sensor = (<div>
				<LocationSensor />
				<TimeSensor />
				<EventSensor />
				<GuestSensor />
			</div>);
		}
		return (
			<div className="row fixwindow">
				<nav>
					<div className="nav-wrapper row grey lighten-3">
						<label className="brand-logo center">React Props Example</label>
						<a id="onstart" className="intro" href="#modal6"> New to react props? </a>
						<ul id="nav-mobile" className="left hide-on-med-and-down">

							<li><Link to={"/1"}>Example1</Link></li>
							<li><Link to={"/2"}>Example2</Link></li>
							<li><Link to={"/3"}>Example3</Link></li>
							<li><Link to={"/4"}>Example4</Link></li>

						</ul>
					</div>
				</nav>
				<div>
					<div id="modal6" className="modal">
						{close_button("modal6")}
						<div className="modal-content">
							<h4 className="rbc-title"> New to react props? </h4>
							<p><code>react</code> prop is available in components whose data view should reactively update when one or more dependent components change their states, e.g. <code>ReactiveMap</code>,                                                                        <code>ReactiveList</code>.</p>
							<p>This app explains the use of <code>react</code> prop of <code>ReactiveBase</code>. It displays how <code>ReactiveMap</code> actuator component reacts to changes in the state of sensors. Four independent examples showcase different possible conjunctions <code>react</code> prop.</p>
						</div>
						<div className="modal-footer">
							<a href="https://opensource.appbase.io/reactive-manual/v1.0.0/map-components/GeoDistanceDropdown.html" target="_blank" className=" modal-action modal-close waves-effect waves-green btn-flat">Learn more</a>
						</div>
					</div>
				</div>
				<div className="col s4">
					{sensor}
				</div>

				<div className="col s7 abrow">
					<Actuator
						path={path}
					/>
				</div>
			</div>
		);
	}
}

module.exports = {
	Dashboard
};
