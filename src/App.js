import React from "react";
import "./App.module.scss";
import BaseLayout from "./components/BaseLayout";
import { BrowserRouter } from "react-router-dom";
import Favicon from "react-favicon";
import Overlay from "./components/Overlay";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showOverlay: true,
		};
	}

	handleShowOverlay = () => {
		this.setState({ showOverlay: false });
	};

	componentDidMount() {
		this.autoshowOverlay = setTimeout(
			function () {
				this.handleShowOverlay();
			}.bind(this),
			3000
		);
	}

	render() {
		return (
			<div>
				<Overlay active={this.state.showOverlay} marginTop='150px'>
					<Favicon url='src/img/favicon.ico'></Favicon>
					<BrowserRouter>
						<BaseLayout />
					</BrowserRouter>
				</Overlay>
			</div>
		);
	}
}
