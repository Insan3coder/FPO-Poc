import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

import './Documents.scss';

const Docuemtns = props => {
	return (
		<div className='DocumentsWrapper'>
			<Breadcrumb>
				<Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
				<Breadcrumb.Item active>Events</Breadcrumb.Item>
			</Breadcrumb>
			<h1>Docuemtns Commint Soon</h1>
		</div>
	);
};

export default Docuemtns;
