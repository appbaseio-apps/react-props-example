import React, {
  Component
} from 'react';

import {
  GeoDistanceDropdown,
  DataSearch,
  NumberBox,
  DateRange,
} from '@appbaseio/reactivemaps';

let LocationSensor = () => {
  return (<GeoDistanceDropdown
    componentId="LocationSensor"
    appbaseField="location"
    title="LocationSensor"
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
    title="CitySensor"
    placeholder="Search for cities"
    autocomplete={true}
    highlight={false}
  />)
}

let GuestSensor = () => {
  return (<NumberBox
    componentId="GuestSensor"
    appbaseField="guests"
    title="GuestSensor"
    data={{ "label": "Guests", "start": 0, "end": 5 }}
    defaultSelected={0}
    labelPosition="left"
  />)
}

let TimeSensor = () => {
  return (<DateRange
    componentId="TimeSensor"
    appbaseField="mtime"
    title="TimeSensor"
    numberOfMonths={1}
    allowAllDates={true}
  />)
}

module.exports = {LocationSensor, CitySensor, GuestSensor, TimeSensor};
