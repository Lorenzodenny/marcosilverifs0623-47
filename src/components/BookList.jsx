import Book from './Book';

const BookList = ({ books, changeBook, bookSelected }) => {
	console.log(books);
	return (
		<div className="mb-3">
			{books.map(book => {
				console.log(book);
				return (
					<Book
						key={book.id}
						book={book}
						changeBook={changeBook}
						bookSelected={bookSelected}
					/>
				);
			})}
		</div>
	);
};

export default BookList;
