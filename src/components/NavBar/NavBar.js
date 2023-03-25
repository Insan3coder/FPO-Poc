import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NAV_ITEMS } from 'Routes/const';
import BRAND_LOGO from 'assets/logos/headerlogo2.png';
import './NavBar.scss';

const NavBar = props => {
	return (
		<div className='NavBarWrapper'>
			<Navbar bg='success' variant='dark' expand='lg'>
				<Container>
					<Navbar.Brand href='#' className='Brand'>
						<img src={BRAND_LOGO} alt='logo2' />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							{NAV_ITEMS?.map(menu => {
								const { path, name } = menu;
								return (
									<Nav.Link
										className='MenuItem'
										key={path}
										href={path}
										active={window?.location?.pathname?.includes(path)}>
										{name}
									</Nav.Link>
								);
							})}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavBar;
