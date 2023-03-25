import React from 'react';
import { Breadcrumb, Row, Col, Card } from 'react-bootstrap';
import { PRODUCTS } from './const';
import './Products.scss';

const Products = props => {
	return (
		<div className='ProductsWrapper'>
			<Breadcrumb>
				<Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
				<Breadcrumb.Item active>Products</Breadcrumb.Item>
			</Breadcrumb>
			<Row className='ProductsGrid'>
				{PRODUCTS.map((image, imageIndex) => {
					return (
						<Col xs={12} sm={12} md={6} lg={4} key={`image-${imageIndex}`}>
							<Card className='Card'>
								<Card.Img
									src={image.img_url}
									className='CardImage'
									variant='top'
									onClick={() => window.open(image.img_url, '_blank')}
								/>
								{/* <Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the card's content.
									</Card.Text>
									<Button variant='primary'>Go somewhere</Button>
								</Card.Body> */}
							</Card>
						</Col>
					);
				})}
			</Row>
		</div>
	);
};

export default Products;
