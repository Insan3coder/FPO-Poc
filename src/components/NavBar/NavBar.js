import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NAV_ITEMS } from 'Routes/const';
import './NavBar.scss';

const NavBar = props => {
	return (
		<div className='NavBarWrapper'>
			<Navbar bg='success' variant='dark'>
				<Container>
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
				</Container>
			</Navbar>
		</div>
	);
};

export default NavBar;
