import Container from 'react-bootstrap/Container';

import Header from 'components/Header';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import Routes from 'Routes';
import './App.scss';

function App() {
	return (
		<div className='App'>
			<div className='ApplicationWrapper'>
				<Header />
				<NavBar />
				<Container>
					<div className='ContentWrapper'>
						<Routes />
					</div>
				</Container>
				<Footer />
			</div>
		</div>
	);
}

export default App;
