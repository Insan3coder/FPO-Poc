import React from 'react';
import headerLogo1 from 'assets/logos/headerlogo1.png';
import headerLogo2 from 'assets/logos/headerlogo2.png';
import headerLogo3 from 'assets/logos/headerlogo3.png';
import './Header.scss';

const Header = props => {
	return (
		<div className='HeaderWrapper'>
			<img src={headerLogo1} alt='logo1' />
			<img src={headerLogo2} alt='logo2' />
			<img src={headerLogo3} alt='logo3' />
		</div>
	);
};

export default Header;
