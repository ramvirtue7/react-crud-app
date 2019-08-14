import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<React.Fragment>
				<Container className="header_container">
					<Row className="header_one">
						<Col className="col_1">
							<div className="logo">
								<NavLink exact to="/" activeClassName="active">
									<Image src={process.env.PUBLIC_URL + 'assets/images/bz_logo.png'} />
								</NavLink>
							</div>
							<div className="hamburger">
								<Image src={process.env.PUBLIC_URL + 'assets/images/hamburger_2.png'} />
							</div>
							<ul className="header_menus">
								<li>
									<NavLink exact to="/" activeClassName="active">
										Dashboard
									</NavLink>
								</li>
								<li>
									<NavLink to="/settings" activeClassName="active">
										Settings
									</NavLink>
								</li>
							</ul>
						</Col>
						<Col className="col_2">
							<div className="bell">
								<Image src={process.env.PUBLIC_URL + 'assets/images/bell.png'} />
							</div>
							<div className="profile_image">
								<Image src={process.env.PUBLIC_URL + 'assets/images/profile_icon.png'} />
							</div>
						</Col>
					</Row>
				</Container>
			</React.Fragment>
		);
	}
}

export default Header;
