import React, {
  Component
} from 'react';

import {
  GeoDistanceDropdown,
  DataSearch,
  NumberBox,
  DateRange,
} from '@appbaseio/reactivemaps';

let close_button = (id) => {
	return (
		<a className="closebutton modal-action modal-close" onClick={()=>{document.getElementById(id).style.display='none';}}>
        <i className="fa fa-times-circle-o fa-1g" aria-hidden="true"></i>
        </a>
		);

}

let location_title = () => {
  return (<div className="row">
    <div className="col s10">
      <h4 className="rbc-title"> LocationSensor </h4>
    </div>
    <div className="col s2">
      <div className="col">
        <a id="onstart" className="btn-floating btn waves-effect waves-light #fafafa grey lighten-6" href="#modal1">
          <i className="fa fa-code" aria-hidden="true"></i>
        </a>

      </div>
    </div>
    <div id="modal1" className="modal">
    {close_button("modal1")}
      <div className="modal-content">
        <h4 className="rbc-title"> GeoDistanceDropdown </h4>
        <p>A GeoDistanceDropdown sensor component creates a location search based proximity slider UI widget. It is used for distance based filtering.</p>

        <p>Example uses:
finding restaurants in walking distance from your location.
discovering things to do near a landmark.</p>
      </div>
      <div className="modal-footer">
        <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/map-components/GeoDistanceDropdown.html" target="_blank" className=" modal-action modal-close waves-effect waves-green btn-flat">Learn more</a>
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
        <a className="btn-floating btn waves-effect waves-light #fafafa grey lighten-6" href="#modal4">
          <i className="fa fa-code" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    
    <div id="modal4" className="modal">
      <div className="modal-content">
        <h4 className="rbc-title"> GeoDistanceDropdown </h4>
        <p>A GeoDistanceDropdown sensor component creates a location search based proximity slider UI widget. It is used for distance based filtering.</p>
        <p>Example uses:
finding restaurants in walking distance from your location.
discovering things to do near a landmark.</p>
      </div>
      <div className="modal-footer">
        <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/map-components/GeoDistanceDropdown.html" target="_blank" className=" modal-action modal-close waves-effect waves-green btn-flat">Learn more</a>
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
      {/*}  <a className="btn-floating btn waves-effect waves-light #fafafa grey lighten-6" href="#modal3"> */}
        <button data-target="modal3" className="btn-floating btn waves-effect waves-light #fafafa grey lighten-6">
          <i className="fa fa-code" aria-hidden="true"></i>
        </button>
       {/*} </a>  */}
      </div>
    </div>
    <div id="modal3" className="modal">
      <div className="modal-content">
        <h4 className="rbc-title"> GeoDistanceDropdown </h4>
        <p>A GeoDistanceDropdown sensor component creates a location search based proximity slider UI widget. It is used for distance based filtering.</p>

        <p>Example uses:
finding restaurants in walking distance from your location.
discovering things to do near a landmark.</p>
      </div>
      <div className="modal-footer">
        <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/map-components/GeoDistanceDropdown.html" target="_blank" className=" modal-action modal-close waves-effect waves-green btn-flat">Learn more</a>
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
        <a className="btn-floating btn waves-effect waves-light #fafafa grey lighten-6" href="#modal4">
          <i className="fa fa-code" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    <div id="modal4" className="modal">
      <div className="modal-content">
        <h4 className="rbc-title"> GeoDistanceDropdown </h4>
        <p>A GeoDistanceDropdown sensor component creates a location search based proximity slider UI widget. It is used for distance based filtering.</p>
        <p>Example uses:
finding restaurants in walking distance from your location.
discovering things to do near a landmark.</p>
      </div>
      <div className="modal-footer">
        <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/map-components/GeoDistanceDropdown.html" target="_blank" className=" modal-action modal-close waves-effect waves-green btn-flat">Learn more</a>
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
