import React from 'react';
import { Breadcrumb, Row, Col, Card } from 'react-bootstrap';
import { DIRECTORS } from './const';
import './Directors.scss';

const Directors = props => {
	return (
		<div className='DirectorsWrapper'>
			<Breadcrumb>
				<Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
				<Breadcrumb.Item active>Directors</Breadcrumb.Item>
			</Breadcrumb>
			<Row className='DirectorsGrid'>
				{DIRECTORS.map((image, imageIndex) => {
					return (
						<Col xs={12} sm={12} md={6} lg={4} key={`image-${imageIndex}`}>
							<Card className='Card'>
								<Card.Img
									src={image.img_url}
									className='CardImage'
									variant='top'
									onClick={() => window.open(image.img_url, '_blank')}
								/>
								<Card.Body>
									<Card.Title>{image.pan}</Card.Title>
									<Card.Text className='Name'>{image.name}</Card.Text>
									<Card.Text>{image.designation}</Card.Text>
									<Card.Text>
										<strong>Date of Appointment </strong>
										{image.date}
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</Row>
		</div>
	);
};

export default Directors;
