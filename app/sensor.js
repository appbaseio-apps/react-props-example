import React, {
  Component
} from 'react';
import {
  GeoDistanceDropdown,
  MultiList,
  NumberBox,
  DateRange,
} from '@appbaseio/reactivemaps';

class Sensor extends Component {
  render() {
    return (
					<div className="fixheight">
						<GeoDistanceDropdown
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
							/>

							<MultiList
							  componentId="CitySensor"
							  appbaseField="group.group_city"
							  title="CitySensor"
							  size={100}
							  sortBy="asc"
							  defaultSelected={["London"]}
							  showCount={true}
							  showSearch={true}
							  searchPlaceholder="Search City"
							  initialLoader="Loading cities list.."
				                componentStyle={{
				                  height: '300px'
				                }}
							/>

							<NumberBox
							  componentId="GuestSensor"
							  appbaseField="guests"
							  title="GuestSensor"
							  data={{ "label": "Guests", "start": 0, "end": 5 }}
							  defaultSelected={0}
							  labelPosition="left"
							/>

							<DateRange
							  componentId="TimeSensor"
							  appbaseField="mtime"
							  title="TimeSensor"
							  numberOfMonths={1}
							  allowAllDates={true}
							/>
					</div>
    );
  }
}

module.exports = {Sensor};
