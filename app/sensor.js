import React, {
  Component
} from 'react';

import {
  GeoDistanceDropdown,
  DataSearch,
  NumberBox,
  DateRange,
} from '@appbaseio/reactivemaps';

let location_title = () => {
  return (<div className="row">
    <div className="col s10">
      <h4 className="rbc-title"> LocationSensor </h4>
    </div>
    <div className="col s2">
      <div className="col">
        <a className="btn-floating btn waves-effect waves-light #fafafa grey lighten-6" href="#modal1"><i className="fa fa-code" aria-hidden="true"></i>
        </a>
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

let city_title = () => {
  return (<div className="row">
    <div className="col s10">
      <h4 className="rbc-title"> CitySensor </h4>
    </div>
    <div className="col s2">
      <div className="col">
        <a className="btn-floating btn waves-effect waves-light #fafafa grey lighten-6" href="#modal1"><i className="fa fa-code" aria-hidden="true"></i>
        </a>
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

let guest_title = () => {
  return (<div className="row">
    <div className="col s10">
      <h4 className="rbc-title"> GuestSensor </h4>
    </div>
    <div className="col s2">
      <div className="col">
        <a className="btn-floating btn waves-effect waves-light #fafafa grey lighten-6" href="#modal1"><i className="fa fa-code" aria-hidden="true"></i>
        </a>
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

let time_title = () => {
  return (<div className="row">
    <div className="col s10">
      <h4 className="rbc-title"> TimeSensor </h4>
    </div>
    <div className="col s2">
      <div className="col">
        <a className="btn-floating btn waves-effect waves-light #fafafa grey lighten-6" href="#modal1"><i className="fa fa-code" aria-hidden="true"></i>
        </a>
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
let LocationSensor = () => {
  return (<GeoDistanceDropdown
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
    />)
}

let CitySensor = () => {
  return (<DataSearch
    componentId="CitySensor"
    appbaseField="group.group_city"
    title={city_title()}
    placeholder="Search for cities"
    autocomplete={true}
    highlight={false}
    />)
}

let GuestSensor = () => {
  return (<NumberBox
    componentId="GuestSensor"
    appbaseField="guests"
    title={guest_title()}
    data={{ "label": "Guests", "start": 0, "end": 5 }}
    defaultSelected={0}
    labelPosition="left"
    />)
}

let TimeSensor = () => {
  return (<DateRange
    componentId="TimeSensor"
    appbaseField="mtime"
    title={time_title()}
    numberOfMonths={1}
    allowAllDates={true}
    />)
}

module.exports = { LocationSensor, CitySensor, GuestSensor, TimeSensor };
