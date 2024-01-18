// Nello store si dichiara la costruzione del Redux Store; lo store deve sapere che i reducers sono tre, e deve gestirli come un unico stato
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from '../reducers/cart';
import bookReducer from '../reducers/book';
import userReducer from '../reducers/user';

// Creare un reducer combinato, con i tre reducers creati
const bigReducer = combineReducers({
	cart: cartReducer,
	book: bookReducer,
	user: userReducer
});

const store = configureStore({
	reducer: bigReducer, // lo store non utilizza uno o l'altro dei reducers, ma li utiilizza tutti, combinati tra loro
});

export default store;
