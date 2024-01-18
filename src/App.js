import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import BookStore from './components/BookStore';
import Cart from './components/Cart';
import CartIndicator from './components/CartIndicator';
import Footer from './components/Footer';
import Error401 from './components/Error401';
import { useSelector } from 'react-redux';

function App() {
	const user = useSelector(state => state.user.username);

	return (
		<BrowserRouter>
			<Container className="main-container">
				<Row>
					<Col className="text-center backgroud-div">
						<Link to="/">
							<h1>Book Store</h1>
						</Link>
					</Col>
					<CartIndicator />
				</Row>
				<Routes>
					<Route path="/" element={<BookStore />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/error401" element={<Error401 />} />
				</Routes>
			</Container>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
