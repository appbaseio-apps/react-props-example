import React, { Component } from 'react';
import ReactDom from 'react-dom';

import CodeMirror from 'react-codemirror';

class CodeM extends Component {
  constructor(props){
super(props);
this.updateCode = this.updateCode.bind(this);
}
	componentWillMount(){
this.state = ({code: `<ReactiveMap
appbaseField="location"
setMarkerCluster={false}
defaultMapStyle="Blue Water"
popoverTTL={3}
autoCenter={true}
size={1000}
// defaultMarkerImage="/geo-location-tweets-frontend/assets/twitter.png"
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
}}  \
/>`})

	}
	updateCode(newCode) {
		this.setState({
			code: newCode,
		});
	}
	render(){
		var options = {
			lineNumbers: true,
		};
		return (<CodeMirror
              value={this.state.code}
              onChange={this.updateCode}
              options={options}
              />

    )
	}
}

module.exports = {CodeM};
