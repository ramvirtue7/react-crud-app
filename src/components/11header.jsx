import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from 'bz_logo.png';
// import Image from 'react-bootstrap/Image';

class Header extends Component {
	render() {
		return (
			<React.Fragment>
				<Container>
					<Row>
						<Col>
							<div className="logo">
								<img src={Logo} />
							</div>
						</Col>
						<Col />
					</Row>
				</Container>
			</React.Fragment>
		);
	}
}

export default Header;
