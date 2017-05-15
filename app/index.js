import React, { Component } from 'react';
import ReactDom from 'react-dom';
import moment from 'moment';
import {
	ReactiveBase,
	ReactiveMap,
	GeoDistanceDropdown,
	ReactiveList
} from '@appbaseio/reactivemaps';

class Main extends Component {

	constructor(props) {
		super(props);
		this.onData = this.onData.bind(this);
		this.onPopoverTrigger = this.onPopoverTrigger.bind(this);
	}

	onPopoverTrigger(markerData) {
		const marker = markerData._source;
		return (
			<a href={"https://twitter.com/" + marker.user.screen_name + "/status/" + marker.id_str}
				target="_blank">
				<div className="row">
					<div className="col s2">
						<img src={marker.user.profile_image_url} />
					</div>
					<div className="col s10">
						<div>
							<span className="black-text text-darken-4" >{marker.user.screen_name} </span>
							<span style={{ "float": "right" }}>{(new moment(marker.created_at)).fromNow()}</span>
						</div>

						<div>
							<p>{marker.text}</p>
						</div>
					</div>
				</div>
			</a>
		);
	}

	onData(markerData) {
		const marker = markerData._source;
		return (
			<a href={"https://twitter.com/" + marker.user.screen_name + "/status/" + marker.id_str}
				target="_blank">
				<div className="row" style={{ "marginBottom": "-10px", "marginTop": "10px" }}>
					<div className="col s2">
						<img src={marker.user.profile_image_url} width={80} />
					</div>
					<div className="col s10">
						<div>
							<span className="black-text text-darken-4" >{marker.user.screen_name} </span>
							<span style={{ "float": "right" }}>{(new moment(marker.created_at)).fromNow()}</span>
						</div>

						<div>
							<p>{marker.text}</p>
						</div>
					</div>
				</div>
			</a>
		);
	}

	render() {
		return (
			<div className="row grey lighten-3">
				<ReactiveBase
					app="Geo-Location-Tweets"
					credentials="xf6lxKyyK:e18f20e9-e95d-4173-a1a9-63f947320f45"
					type="new_data"
					>
					<div className="col s12 col-xs-12 col-sm-6" style={{ "marginTop": "20px" }}>
						<div className="col s6">
							<h3 style={{ "fontFamily": "Fireeye", "marginTop": "10px", "marginLeft": "20px", "marginBottom": "30px", "fontSize": "60" }} > Geo - Location Tweets </h3>
						</div>
						<div className="col s6">
							<GeoDistanceDropdown
								componentId="GeoDistanceDropdown"
								appbaseField="location"
								title=""
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
						</div>
					</div>

					<div className="col s12" style={{ "maxHeight": "1000px", "height": "100%", "overflow": "hidden" }}>
						<div className="col s6">
							<ReactiveMap
								appbaseField="location"
								historicalData={true}
								setMarkerCluster={false}
								defaultMapStyle="Blue Water"
								popoverTTL={3}
								autoCenter={true}
								defaultMarkerImage="../assets/twitter.png"
								showSearchAsMove={true}
								showMapStyles={true}
								title="Reactive Maps"
								onPopoverTrigger={this.onPopoverTrigger}
								defaultZoom={13}
								react={{
									and: "GeoDistanceDropdown"
								}}
								componentStyle={{
									height: '550px'
								}}
								/>
						</div >

						<div className="col s6">
							<ReactiveList
								componentId="SearchResult"
								appbaseField="location"
								containerStyle={{
									height: "100%"
								}}
								title="Tweets"
								from={0}
								size={20}
								requestOnScroll={true}
								onData={this.onData}
								react={{
									and: "GeoDistanceDropdown"
								}}
								componentStyle={{
									height: '550px'
								}}
								/>
						</div>
					</div>
				</ReactiveBase>
			</div>
		);
	}
}

ReactDom.render(<Main />, document.getElementById('app'));


