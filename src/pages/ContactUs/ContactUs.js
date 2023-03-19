import React from 'react';
import { Breadcrumb, Card } from 'react-bootstrap';
import { BsGeoAltFill, BsFillTelephoneFill, BsEnvelopeAtFill } from 'react-icons/bs';
import './ContactUs.scss';

const ContactUs = props => {
	return (
		<div className='ContactUsWrapper'>
			<Breadcrumb>
				<Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
				<Breadcrumb.Item active>Gallery</Breadcrumb.Item>
			</Breadcrumb>

			<div className='ContactCards'>
				<Card className='Card'>
					<div className='title'>
						<BsGeoAltFill />
						<span>ADDRESS</span>
					</div>
					<div className='disc'>
						<p>Belakavadi-T Narsipura Main Road Saraguru</p>
						<p>Hand Post,B G Pura Hobli,Malavalli,</p>
						<p>Mandya District,Karnataka,India.</p>
						<p>PIN CODE:571463.</p>
					</div>
				</Card>
				<Card className='Card'>
					<div className='title'>
						<BsFillTelephoneFill />
						<span>PHONE</span>
					</div>
					<div className='disc'>
						<p>
							+91 9964841312(M) -<strong>Madan Kumar-CEO</strong>
						</p>
						<p>
							+91 9591748180 (F) -<strong>Radhika-Accountant</strong>
						</p>
						<p>
							+91 9945558623 (M) -<strong>B S Mahadevaiah-President</strong>
						</p>
					</div>
				</Card>
				<Card className='Card'>
					<div className='title'>
						<BsEnvelopeAtFill />
						<span>EMAIL</span>
					</div>
					<div className='disc'>
						<p>
							<a href='mailto:email@example.com?subject=Mail from our Website'>bgpuraragifpc@gmail.com</a>
						</p>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default ContactUs;
