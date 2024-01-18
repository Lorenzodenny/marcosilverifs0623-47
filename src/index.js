import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';

// Nella index.js, che è il javascript che alimenta l'unico HTML esposto, cioè l'index.html presente nella cartella public, devo iniettare lo state di Redux, dai file index presenti in reducers e in store, perché quelle di Redux sono dipendenze, vanno quindi iniettate come tali nei file principali dell'applicazione

import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);

// "Provider" è un componente della libreria di collegamento di Redux in ambiente React (react-redux).
// Va utilizzato come "contenitore" di App, in modo da iniettare in App, e quindi in TUTTA l'applicazione, la logica del Redux Store
// Provider necessita di una singola prop, generalmente chiamate "store" il cui valore è il risultato di un configureStore()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
