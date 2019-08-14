import React, { Component } from 'react';
import Header from './components/header';
import Main from './components/main';
import User_details from './components/pages/user_details';
import Advertisements from './components/pages/advertisements';
import Category from './components/pages/category';
import Settings from './components/pages/settings';
import Sidebar from './components/sidebar';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, NavLink, Redirect } from 'react-router-dom';
import './app.scss';

class App extends Component {
	render() {
		return (
			<div className="masterApp">
				<Router>
					<div className="header">
						<Header />
					</div>
					<Row>
						<div className="sideBar">
							<Sidebar />
						</div>
						<div className="mainContent">
							<Route exact path="/" component={Main} />
							<Route path="/user_details" component={User_details} />
							<Route path="/advertisements" component={Advertisements} />
							<Route path="/category" component={Category} />
							<Route path="/settings" component={Settings} />
							<Route render={() => <Redirect to={{ pathname: '/' }} />} />
						</div>
					</Row>
				</Router>
			</div>
		);
	}
}

export default App;
