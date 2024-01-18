import { Col, Row, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartAction } from '../redux/actions';

const BookDetail = ({ bookSelected }) => {
	const dispatch = useDispatch(); // funzione dispatch che sarà utilizzata per emettere l'azione ADD_TO_CART

	const user = useSelector(state => state.user.username);

	return (
		<div className="mt-3 mb-4 mb-lg-0">
			{bookSelected ? (
				<>
					<Row>
						<Col sm={12}>
							<h2>{bookSelected.title}</h2>
						</Col>
					</Row>
					<Row className="mt-3">
						<Col sm={4}>
							<div className="mt-3">
								<img
									src={bookSelected.imageUrl}
									alt={`Copertina ${bookSelected.title}`}
									className="book-cover"
								/>
							</div>
						</Col>
						<Col sm={8}>
							<p>
								<span className="fw-bold">Description: </span>
								&nbsp;{bookSelected.description}
							</p>
							<p>
								<span className="fw-bold">Price: 🍎 </span>
								&nbsp;{bookSelected.price}
							</p>
							{user ? (
								<Button
									className="d-flex align-items-center"
									onClick={() => {
										dispatch({
											type: 'ADD_TO_CART', // Il type presente nello switch del reducer
											payload: bookSelected, // il payload è l'elemento da passare all'azione
										});
									}}>
									<span className="me-2">AGGIUNGI AL</span>
									&nbsp;
									<FaShoppingCart />
								</Button>
							) : (
								<p>
									Effettua l'accesso per poter comprare questo
									libro
								</p>
							)}
						</Col>
					</Row>
				</>
			) : (
				<Row>
					<Col sm={12}>
						<h3>Clicca su un libro per i dettagli</h3>
					</Col>
				</Row>
			)}
		</div>
	);
};

export default BookDetail;
