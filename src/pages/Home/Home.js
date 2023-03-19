import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { SLIDER_IMAGES, TESTIMONIALS } from './const';

import './Home.scss';

const Home = props => {
	return (
		<div className='HomeWrapper'>
			<div className='SliderWrapper'>
				<Carousel>
					{SLIDER_IMAGES.map((image, imageIndex) => {
						return (
							<Carousel.Item key={`image-${imageIndex}`}>
								<img className='d-block w-100' src={image.img_url} alt='First slide' />
								<Carousel.Caption>
									<h3>First slide label</h3>
									<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
								</Carousel.Caption>
							</Carousel.Item>
						);
					})}
				</Carousel>
			</div>
			<Row>
				{TESTIMONIALS.map((item, itemIndex) => {
					return (
						<Col lg={4} key={`item-${itemIndex}`} className='TestimonialBox'>
							<img className='rounded-circle' src={item.img_url} alt='placeholder' width='140' height='140' />
							<h2>{item.name}</h2>
							<p>{item.desc}</p>
						</Col>
					);
				})}
			</Row>
		</div>
	);
};

export default Home;
