import React, { Fragment, useState, useEffect, useRef, useContext } from 'react';
import { useFetchData } from './hooks';
import BookCard from './bookcard';
import { Context } from './context';

//styles
import './searchbar.scss';

const SearchBar = ()=> {
  const {query, setQuery, isLoading, setIsLoading, data, setData, error, setIsError} = useContext(Context);
  const [isEmpty, setIsEmpty] = useState(false);
  const input = useRef();

  console.log(data);

useEffect(() => {
  input.current.focus();
}, [data]);

const handleClose = (e) => {
  e.preventDefault();
  setQuery('');
};

const updateQuery = (e) => {
  setQuery(e.target.value);
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  setIsError(false);
  const key = 'AIzaSyCxeE_F8Evvzj21h51vdXtYPZvcIsTvAn0';
  const url = 'https://www.googleapis.com/books/v1/volumes';
  const startIndex = 0;
  const maxResults = 10;
  const mainUrl = `${url}?q=${query}&startIndex=${startIndex}&maxResults=${maxResults}&key=${key}`;
  if (!query.length) {
    setIsEmpty(true);
  } else {
    try {
      const response = await fetch(mainUrl);
      if(!response.ok){ 
        throw Error(response.status);
      } 
      const json = await response.json();
      setData(json); 
      setIsLoading(false);  
        
    } catch(err) {
      if(err.message === '404'){
        console.log('We were unable to connect with Google Books');
      } else if(err.message === '400'){
        console.log('Something went wrong with the Google Books API key.')
       }
    }
  }
}

return (
    <form onSubmit={handleSubmit}>
        <div className='search-bar'>
            <label htmlFor='search'>Search for a book: </label>
            <input type='text' id='search' value={query} onChange={updateQuery} ref={input}/>
            {query.length !== 0 && <button onClick={handleClose} className="close-btn">&times;</button>}
            <button type='submit'>Search</button>
        </div>
        {isEmpty && <span>Please provide a search query.</span>}
    </form>
)
}

export default SearchBar;