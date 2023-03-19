import React, { useState } from 'react';
import { Breadcrumb, Tab, Tabs, Table } from 'react-bootstrap';
import './Events.scss';
import { TAB_LIST, defaultTabKey } from './const';

const Events = props => {
	const [activeTab, setActiveTab] = useState(defaultTabKey);
	return (
		<div className='EventsWrapper'>
			<Breadcrumb>
				<Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
				<Breadcrumb.Item active>Events</Breadcrumb.Item>
			</Breadcrumb>
			<div className='TabsWrapper'>
				<Tabs defaultActiveKey={activeTab} id='uncontrolled-tab-example' className='mb-3'>
					{TAB_LIST.map(tab => {
						const { key, title } = tab;
						return (
							<Tab
								key={key}
								onClick={() => setActiveTab(key)}
								eventKey={key}
								title={title}
								active={key === activeTab}
								color='success'>
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
							</Tab>
						);
					})}
				</Tabs>
			</div>
		</div>
	);
};

export default Events;
