import React, { Fragment, useState, useEffect } from 'react';

const useFetchData = ()=> {
    const [data, setData] = useState();
    const [query, setQuery] = useState([]);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [url, setUrl] = useState();
  

    //async returns a promise, and useEffect must only return a clean up function or nothing, so can't use async
    //directly in useEffect function
    const usefetchUrl = async (url) => {
        setIsLoading(true);
        setIsError(false);
        try {
            const response = await fetch(url);
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
    };

    //second argument contains variables that the hook watches for and runs when the variables have changed
    useEffect(()=>{
        usefetchUrl();
    }, [search]);

    const doGet = (event, url) => {
        setUrl(url);
        event.preventDefault();
    }

    return [data, isLoading, isError];
};

export {useFetchData};
