import React, { useContext, useEffect } from 'react';

import BookCard from './bookcard';
import { Context } from './context';
//import Spinner from './Spinner';

//import '../styles/books.scss';

export default function Books() {
  const { data, isLoading } = useContext(Context);
  let books = (typeof(data) === 'undefined' ? {} : data);
  
  if (books) {
    if (books.totalItems === 0) {
      return <span className="holderText">Nothing was found. Try another search!</span>
    }
  }; 

  return (
    <div className="books">
      {Object.keys(books).length === 0 ? 
      <span className="holderText">Try searching for a book! Any book!</span> : <BookCard books={books} />}
    </div>
  )
};