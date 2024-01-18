export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SET_USERNAME = 'SET_USERNAME';
export const GET_BOOKS = 'GET_BOOKS';

// per riutilizzare le actions, cioè per metterle a disposizione di qualsiasi component le debba chiamare, non le si esporta sotto forma di oggetto ma di funzione; questo è l'action creator, cioè una funzione che ritorna una action

export const addToCartAction = bookSelected => {
	return {
		type: ADD_TO_CART, // è importante dare al tipo, e in generale è una buona pratica della naming convention, un nome parlante, che spieghi cosa fa/a cosa serve
		payload: bookSelected,
	};
};

export const removeFromCartAction = i => {
	return {
		type: REMOVE_FROM_CART,
		payload: i,
	};
};

// export const removeFromCartAction = (i) => ({
//     type: REMOVE_FROM_CART,
//     payload: i
// });

export const setUsernameAction = username => {
	return {
		type: SET_USERNAME,
		payload: username,
	};
};

export const getBooksAction = () => {
	return async dispatch => {
		// qui verrà effettuata la fetch (o qualsiasi operazione asincrona) che, una volta ottenuto il risultato, sarà spedita (dispatch) verso il reducer che farà il dispatch verso lo store e quindi verso i components
		// try {
		// 	let resp = await fetch(
		// 		'https://striveschool-api.herokuapp.com/food-books'
		// 	);
		// 	if (resp.ok) {
		// 		let fetchedBooks = await resp.json();
		// 		dispatch({
		// 			type: GET_BOOKS,
		// 			payload: fetchedBooks, // viene dispatchato l'intero array di libri
		// 		});
		// 	} else {
		// 		throw new Error('Errore nel recupero dati');
		// 	}
		// } catch (error) {
		// 	console.log(error);
		// }
		fetch('https://striveschool-api.herokuapp.com/food-books')
			.then(res => {
				if (res.ok) {
					return res.json();
				} else {
					throw new Error('Errore nel recupero dati');
				}
			})
			.then(books => {
				dispatch({
					type: GET_BOOKS,
					payload: books,
				});
			})
			.catch(err => {
				console.log('Errore ', err);
			});
	};
};
