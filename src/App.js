import React, { Fragment, useState } from 'react';
import './App.css';
import { Context } from './Components/context';
import SearchBar from './Components/searchbar';
import BookGrid from './Components/books';

export default function App() {
    const [data, setData] = useState();
    const [query, setQuery] = useState([]);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [url, setUrl] = useState();
    
    return (
       <Context.Provider value={{ data, setData, query, setQuery, search, setSearch, isLoading, setIsLoading, isError, setIsError, url, setUrl}}> 
        <div className="App">
            <header className="App-header">
                <h1>Book Finder App</h1>
            </header>
            <SearchBar />
            <BookGrid />
        </div>
      </Context.Provider>
    );
}

//export default App;
