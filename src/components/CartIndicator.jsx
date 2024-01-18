import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { setUsernameAction } from '../redux/actions';
// useSelector restituisce un valore a partire da un metodo di callback, in cui ricevo come parametro il redux store

const CartIndicator = () => {
	const navigate = useNavigate();
	const cartLength = useSelector(state => state.cart.content.length);
	const [inputValue, setInputValue] = useState('');

	// Verificare se l'utente è già entrato
	const user = useSelector(state => state.user.username);

	const dispatch = useDispatch();

	return (
		<div className="d-flex justify-content-end my-4">
			{/* se c'è l'utente, viene stampato il nome e non compare il form, altrimenti c'è il form per consentire il login */}
			{user ? (
				<>
					<span className="me-2">Benvenuto, {user}!</span>
					<Button
						onClick={() => navigate('cart')}
						className="d-flex align-items-center me-2">
						<FaShoppingCart />
						<span className="ms-2">{cartLength}</span>
					</Button>
					<Button className="d-flex align-items-center bg-danger" onClick={() => {
						dispatch(setUsernameAction(''));
						setInputValue('');
						navigate('/');
					}}>Logout</Button>
				</>
			) : (
				<Form
					onSubmit={e => {
						e.preventDefault();
						if (inputValue.trim() !== '') {
							dispatch(setUsernameAction(inputValue));
						}
					}}>
					<Form.Control
						placeholder="Effettua il login"
						value={inputValue}
						onChange={e => setInputValue(e.target.value)}
					/>
				</Form>
			)}
		</div>
	);
};

export default CartIndicator;
