import React from 'react';
import { Breadcrumb, Table } from 'react-bootstrap';
import './AboutUs.scss';

const AboutUs = props => {
	return (
		<div className='AboutUsWrapper'>
			<Breadcrumb>
				<Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
				<Breadcrumb.Item active>About Us</Breadcrumb.Item>
			</Breadcrumb>
			<div className='AboutUsContent'>
				<p>
					Lorem laboris ullamco non culpa. Qui anim esse laborum in et laborum in occaecat exercitation qui quis nulla
					tempor. Irure velit eu veniam irure incididunt aliqua quis incididunt nisi. Duis pariatur dolore cupidatat do
					commodo reprehenderit laboris aliquip reprehenderit ipsum ullamco velit et. Proident labore mollit sunt
					exercitation. Nulla eu consequat exercitation cillum exercitation consectetur excepteur labore cillum.
					Deserunt pariatur labore Lorem incididunt cillum ipsum minim ad.
				</p>
				<br />
				<p>
					Do culpa aliqua deserunt excepteur aliqua consequat commodo sunt non id elit. Dolore ipsum Lorem dolor
					reprehenderit non cillum elit deserunt aliqua. Fugiat irure exercitation eu deserunt ex ut. Esse ullamco
					laboris excepteur ea pariatur incididunt officia tempor aliqua. Anim sint Lorem id laboris culpa deserunt
					nostrud et tempor. Ea aute Lorem occaecat aliquip ut velit. Tempor esse nisi eu cupidatat mollit duis nulla
					ipsum veniam laboris ad.
				</p>
			</div>
			<br />
			<Breadcrumb>
				<Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
				<Breadcrumb.Item active>Company Details</Breadcrumb.Item>
			</Breadcrumb>
			<br />
			<div className='CompanyDetails'>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>#</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Username</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
						</tr>
						<tr>
							<td>3</td>
							<td colSpan={2}>Larry the Bird</td>
							<td>@twitter</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	);
};

export default AboutUs;
