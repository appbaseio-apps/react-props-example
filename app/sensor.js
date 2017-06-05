import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import {
  GeoDistanceDropdown,
  DataSearch,
  NumberBox,
  DateRange
} from "@appbaseio/reactivemaps";

const location_overlay_render = () => {
	const code = `<GeoDistanceDropdown
    componentId="LocationSensor"
    appbaseField="location"
    title={location_title()}
    unit="mi"
    data={
      [
        { "start": 0, "end": 20, "label": "< 20 miles" },
        { "start": 0, "end": 50, "label": "< 50 miles" },
        { "start": 0, "end": 100, "label": "< 100 miles" },
      ]
    }
    defaultSelected={{
      label: "< 50 miles"
    }}
    placeholder="Select a distance range.."
    />`;
	return (<div id="modal1" className="modal">
		{close_button("modal1")}
		<div className="modal-content">
			<h4 className="rbc-title"> GeoDistanceDropdown </h4>
			<p > A <code>GeoDistanceDropdown</code> sensor component creates a location search based proximity slider UI widget. It is used for distance based filtering.</p>
			<p>Usage</p>
			<SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>

		</div>
		<div className="modal-footer">
			<a href="https://opensource.appbase.io/reactive-manual/v1.0.0/map-components/GeoDistanceDropdown.html" target="_blank" className=" modal-action modal-close waves-effect waves-green btn-flat">Learn more</a>
		</div>
	</div>);
};

const event_overlay_render = () => {
	const code = `<DataSearch
    componentId="EventSensor"
    appbaseField="event.event_name"
    title={event_title()}
    placeholder="Search for cities"
    autocomplete={true}
    highlight={false}
    />`;
	return (<div id="modal2" className="modal">
		{close_button("modal2")}
		<div className="modal-content">
			<h4 className="rbc-title"> DataSearch </h4>
			<p >A <code>DataSearch</code> sensor component creates a searchbox UI widget with an autocomplete functionality. It is used for applying full-text search across one or more fields.</p>
			<SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
		</div>
		<div className="modal-footer">
			<a href="https://opensource.appbase.io/reactive-manual/v1.0.0/components/DataSearch.html" target="_blank" className=" modal-action modal-close waves-effect waves-green btn-flat">Learn more</a>
		</div>
	</div>);
};

const guest_overlay_render = () => {
	const code = `<NumberBox
    componentId="GuestSensor"
    appbaseField="guests"
    title={guest_title()}
    data={{ "label": "Guests", "start": 0, "end": 5 }}
    defaultSelected={0}
    labelPosition="left"
    />`;
	return (<div id="modal3" className="modal">
		{close_button("modal3")}
		<div className="modal-content">
			<h4 className="rbc-title"> NumberBox </h4>
			<p >A <code>NumberBox</code> sensor component creates a NumberBox UI widget. It is used for filtering results based on a numeric query.</p>
			<SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
		</div>
		<div className="modal-footer">
			<a href="https://opensource.appbase.io/reactive-manual/v1.0.0/components/NumberBox.html" target="_blank" className=" modal-action modal-close waves-effect waves-green btn-flat">Learn more</a>
		</div>
	</div>);
};

const time_overlay_render = () => {
	const code = `<DateRange
    componentId="TimeSensor"
    appbaseField="mtime"
    title={time_title()}
    numberOfMonths={1}
    allowAllDates={true}
    />`;
	return (<div id="modal4" className="modal">
		{close_button("modal4")}
		<div className="modal-content">
			<h4 className="rbc-title"> DateRange </h4>
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

const location_title = () => (<div className="row">
	<div className="col s10">
		<h4 className="rbc-title"> LocationSensor </h4>
	</div>
	<div className="col s2">
		<div className="col">
			<a className="btn-floating btn waves-effect waves-light #fafafa grey lighten-6" href="#modal1">
				<i className="fa fa-code" aria-hidden="true" />
			</a>
		</div>
	</div>
  </div>);

const event_title = () => (<div className="row">

	<div className="col s10">
		<h4 className="rbc-title"> EventSensor </h4>
	</div>
	<div className="col s2">
		<div className="col">
			<a className="btn-floating btn waves-effect waves-light #fafafa grey lighten-6" href="#modal2">
				<i className="fa fa-code" aria-hidden="true" />
			</a>
		</div>
	</div>
  </div>);

const guest_title = () => (<div className="row">
	<div className="col s10">
		<h4 className="rbc-title"> GuestSensor </h4>
	</div>
	<div className="col s2">
		<div className="col">
			<a className="btn-floating btn waves-effect waves-light #fafafa grey lighten-6" href="#modal3">
				<i className="fa fa-code" aria-hidden="true" />
			</a>
		</div>
	</div>
  </div>);

const time_title = () => (<div className="row">
	<div className="col s10">
		<h4 className="rbc-title"> TimeSensor </h4>
	</div>
	<div className="col s2">
		<div className="col">
			<a className="btn-floating btn waves-effect waves-light #fafafa grey lighten-6" href="#modal4">
				<i className="fa fa-code" aria-hidden="true" />
			</a>
		</div>
	</div>
  </div>);

const LocationSensor = () => (
	<div>
		<GeoDistanceDropdown
			componentId="LocationSensor"
			appbaseField="location"
			title={location_title()}
			unit="mi"
			data={
			[
            { start: 1, end: 20, label: "< 20 miles" },
            { start: 1, end: 50, label: "< 50 miles" },
            { start: 1, end: 100, label: "< 100 miles" }
			]
        }
			defaultSelected={{
				label: "< 50 miles"
			}}
			placeholder="Select a distance range.."
		/>
		{location_overlay_render()}
	</div>);

const EventSensor = () => (
	<div><DataSearch
		componentId="EventSensor"
		appbaseField="event.event_name"
		title={event_title()}
		placeholder="Search for events"
		autocomplete={true}
		highlight={false}
	/>
		{event_overlay_render()}
	</div>);

const GuestSensor = () => (
	<div>
		<NumberBox
			componentId="GuestSensor"
			appbaseField="guests"
			title={guest_title()}
			data={{ label: "Guests", start: 0, end: 5 }}
			defaultSelected={0}
			labelPosition="left"
		/>
		{guest_overlay_render()}
	</div>);

const TimeSensor = () => (
	<div>
		<DateRange
			componentId="TimeSensor"
			appbaseField="mtime"
			title={time_title()}
			numberOfMonths={1}
			allowAllDates={true}
		/>
		{time_overlay_render()}
	</div>);

module.exports = { LocationSensor,
	EventSensor,
	GuestSensor,
	TimeSensor
};
