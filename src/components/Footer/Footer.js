import React from 'react';

import youtubeIcon from 'assets/icons/youtube.png';
import facebookIcon from 'assets/icons/facebook.png';
import instagramIcon from 'assets/icons/instagram.png';
import './Footer.scss';

const Footer = props => {
	return (
		<div className='FooterWrapper'>
			<h1>B G PURA RAGI Farmers Producer Company Limited.</h1>
			<small>
				Belakavadi-T Narsipura Main Road Saraguru Hand Post, B G Pura Hobli, Mandya District, Karnataka, India, PIN:
				571463.
			</small>
			<div className='IconWrapper'>
				<img className='icons' src={youtubeIcon} alt='youtube' />
				<img src={facebookIcon} alt='facebook' />
				<img src={instagramIcon} alt='instagram' />
			</div>
			<div className='copyright'>
				&copy; Copyright <strong>Vikasana</strong>. All Rights Reserved {new Date().getFullYear()}
			</div>
		</div>
	);
};

export default Footer;
