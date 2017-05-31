import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import { ReactiveBase } from "@appbaseio/reactivemaps";
import { config } from "./config";
import { Dashboard } from "./dashboard";

class Main extends Component {

	render() {
		return (
			<div>
				<ReactiveBase
					app={config.credential_appbase.app}
					credentials={config.credential_appbase.credentials}
					type="meetupdata1"
				>

					<Router history={browserHistory}>
						<Route path="/" component={Dashboard} />
						<Route path="/1" component={Dashboard} />
						<Route path="/2" component={Dashboard} />
						<Route path="/3" component={Dashboard} />
						<Route path="/4" component={Dashboard} />
					</Router>
				</ReactiveBase>
			</div>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById("app"));
