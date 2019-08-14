import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { Accordion } from 'react-bootstrap/Accordion';

class Sidebar extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="sideBar_heading">
					<ul>
						<li>
							<NavLink exact to="/" activeClassName="active">
								Dashboard
							</NavLink>
						</li>
						<li>
							<NavLink to="/user_details" activeClassName="active">
								User Details
							</NavLink>
							<ul>
								<li>User Profile</li>
								<li>User Account Details</li>
								<li>User Settings</li>
							</ul>
						</li>
						<li>
							<NavLink to="/advertisements">Advertisement</NavLink>
						</li>
						<li>
							<NavLink to="/category">Category</NavLink>
						</li>
						<li>
							<NavLink to="/settings">Settings</NavLink>
						</li>
					</ul>
				</div>
			</React.Fragment>
		);
	}
}

export default Sidebar;
