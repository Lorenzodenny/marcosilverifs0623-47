import { Link } from 'react-router-dom';

const error401 = () => {
	return (
		<div className="text-center">
			<h2>Devi essere loggato per visualizzare il carrello</h2>
			<h2>
				Loggati con la casella di login qui sopra oppure{' '}
				<Link className="btn btn-primary" to={'/'}>
					Torna alla home
				</Link>
			</h2>
		</div>
	);
};

export default error401;
